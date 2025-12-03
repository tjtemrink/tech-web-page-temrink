'use client';

import React, { useState, useRef, useEffect } from 'react';
import yaml from 'js-yaml';
import { HiChatBubbleLeftRight, HiXMark, HiPaperAirplane } from 'react-icons/hi2';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface QuickAction {
  label: string;
  action: () => void;
  isPrimary?: boolean;
}

interface RecommendationRule {
  name: string;
  then?: {
    package?: string;
    price_hint?: string;
    hourly?: {
      business_hours: string;
      after_hours: string;
    };
    consult?: {
      business_hours: string;
      after_hours: string;
    };
    add_ons?: string[];
  };
}

interface KnowledgeBase {
  recommendation_logic?: {
    rules?: RecommendationRule[];
  };
  response_snippets?: {
    value_prop_short?: string;
    after_hours_notice?: string;
    onsite_notice?: string;
  };
  call_to_action_templates?: {
    discovery_call?: string;
  };
}


const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm here to help you learn about Temrink's services, pricing, and licensing. How can I assist you today?",
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [kb, setKb] = useState<KnowledgeBase | null>(null);
  const [isRecommending, setIsRecommending] = useState(false);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Load YAML knowledge base (client-side fetch from public)
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/knowledge/temrink-data-bank.yaml', { cache: 'no-cache' });
        const text = await res.text();
        const data = yaml.load(text) as KnowledgeBase;
        setKb(data);
      } catch (e) {
        console.warn('Knowledge base load failed', e);
      }
    })();
  }, []);

  const quickActions: QuickAction[] = [
    {
      label: "Book a Meeting",
      action: () => {
        window.location.href = '/contact';
      },
      isPrimary: true
    },
    {
      label: "Recommend a package",
      action: () => startRecommendation()
    },
    {
      label: "What services do you offer?",
      action: () => handleQuickAction("What services do you offer?")
    },
    {
      label: "Tell me about pricing",
      action: () => handleQuickAction("Tell me about pricing")
    },
    {
      label: "Microsoft 365 licensing",
      action: () => handleQuickAction("Microsoft 365 licensing")
    }
  ];

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase();
    
    if (message.includes('service') || message.includes('what do you do')) {
      return "Temrink provides four core services:\n\n🔹 **Licensing Management**: Right-size Microsoft 365 or Google Workspace licenses with security best practices\n🔹 **Device as a Service**: Standardized Windows/Mac builds with zero-touch provisioning\n🔹 **AI & Automation**: Copilot rollout and workflow automation\n🔹 **IT Helpdesk**: Responsive support with clear SLAs\n\nWould you like details about any specific service?";
    }
    
    if (message.includes('pricing') || message.includes('cost') || message.includes('price')) {
      return "Our Microsoft 365 Business pricing (CAD, annual):\n\n• **Business Basic**: $8.10/user/month\n• **Business Standard**: $17.00/user/month\n• **Business Premium**: $29.80/user/month (Most Popular)\n• **Apps for Business**: $11.70/user/month\n\n**Microsoft 365 Copilot**: $40.70/user/month (add-on)\n\nLicense costs are separate from our management fees. We can help right-size your licenses to reduce waste. Ready to discuss your needs?";
    }
    
    if (message.includes('licens') || message.includes('microsoft') || message.includes('office')) {
      return "We manage Microsoft 365 and Google Workspace licensing:\n\n✅ **Consolidated billing** and cost reporting\n✅ **Right-size seats** to cut waste\n✅ **Security baseline** and governance\n✅ **Monthly usage** and savings reports\n\nWe can transfer existing licenses and optimize your setup. What's your current licensing situation?";
    }
    
    if (message.includes('copilot') || message.includes('ai') || message.includes('automation')) {
      return "We implement AI solutions including:\n\n🤖 **Microsoft 365 Copilot** - Productivity AI across Office apps\n🤖 **Copilot for Sales** - CRM integration and meeting prep\n🤖 **Copilot for Service** - Support desk automation\n🤖 **Security Copilot** - SOC assistant for threat hunting\n🤖 **Custom automations** - Power Automate workflows\n\nMost rollouts take 2-4 weeks for pilot, then full deployment. What's your team size?";
    }
    
    if (message.includes('helpdesk') || message.includes('support')) {
      return "Our IT Helpdesk includes:\n\n📞 **Responsive support** with clear SLAs\n📞 **On/Off-boarding** and access requests\n📞 **Monitoring** and monthly optimization\n📞 **Priority incident** handling\n\nWe also provide device management, patching policies, and security monitoring. What support challenges are you facing?";
    }
    
    if (message.includes('contact') || message.includes('meeting') || message.includes('book')) {
      return "Great! I can help you book a meeting. You'll be redirected to our contact page where you can schedule a discovery call. We'll assess your licensing, security baseline, and automation opportunities.";
    }
    
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello! I'm here to help you learn about Temrink's services. We specialize in Microsoft 365/Google Workspace licensing, IT helpdesk, and AI automation for SMBs. What would you like to know?";
    }
    
    // If we have YAML knowledge, provide a default helpful reply with CTA
    const fallbackCta = "Would you like me to recommend a package or book a meeting?";
    return `I'd be happy to help! I can tell you about our services (licensing, helpdesk, AI automation), pricing, or help you book a meeting. ${fallbackCta}`;
  };

  // ---------------- Recommendation flow -----------------
  const getQualificationQuestions = (): Array<{ key: string; text: string }> => {
    // Map YAML question groups to a concise set
    return [
      { key: 'users', text: 'How many users need email/productivity today?' },
      { key: 'licenses', text: 'What licenses are in place now? (e.g., M365 Basic/Premium, Google, Copilot)' },
      { key: 'risk', text: 'Any compliance or heightened security needs? (e.g., PIPEDA, HIPAA-like)' },
      { key: 'goals', text: 'Do you want to outsource IT, optimize costs, or automate workflows?' },
      { key: 'devices', text: 'Do you also need laptops bundled with support (Windows/Mac)?' },
    ];
  };

  const startRecommendation = () => {
    setIsRecommending(true);
    setQuestionIndex(0);
    setAnswers({});
    const q = getQualificationQuestions()[0];
    pushBot(`Great — I’ll ask a few quick questions to recommend a package.\n\n${q.text}`);
  };

  const pushBot = (text: string) => {
    setMessages(prev => [
      ...prev,
      { id: (Date.now() + Math.random()).toString(), text, isUser: false, timestamp: new Date() }
    ]);
  };

  const handleRecommendationAnswer = (userText: string) => {
    const qs = getQualificationQuestions();
    const current = qs[questionIndex];
    if (current) {
      setAnswers(prev => ({ ...prev, [current.key]: userText }));
    }
    if (questionIndex + 1 < qs.length) {
      const next = qs[questionIndex + 1];
      setQuestionIndex(questionIndex + 1);
      pushBot(next.text);
    } else {
      setIsRecommending(false);
      setQuestionIndex(0);
      const recommendation = evaluateRecommendation(answers);
      pushBot(recommendation);
    }
  };

  const evaluateRecommendation = (ans: Record<string, string>): string => {
    const text = (k: string) => (ans[k] || '').toLowerCase();
    const usersNum = parseInt(text('users').match(/\d+/)?.[0] || '0', 10);
    const licenses = text('licenses');
    const risk = text('risk');
    const goals = text('goals');
    const devices = text('devices');

    // YAML-driven heuristics
    const rules = kb?.recommendation_logic?.rules || [];

    const select = (name: string): RecommendationRule | undefined => rules.find((r: RecommendationRule) => r.name === name);
    const adv = select('require_advanced_for_biz_premium');
    const small = select('small_team_starter');
    const mixed = select('mixed_license_flex');
    const full = select('full_outsource');
    const lease = select('need_hardware_plus_support');
    const urgent = select('urgent_or_security_sensitive');
    const ai = select('ai_automation_initiative');

    const picks: string[] = [];

    if (licenses.includes('premium')) {
      picks.push(formatPackage(adv));
    }
    if (usersNum > 0 && usersNum < 10 && risk.includes('low')) {
      picks.push(formatPackage(small));
    }
    if (licenses.includes('mixed') || licenses.includes('basic') && licenses.includes('premium')) {
      picks.push(formatPackage(mixed));
    }
    if (goals.includes('outsource') || goals.includes('fully managed')) {
      picks.push(formatPackage(full));
    }
    if (devices.includes('yes') || devices.includes('laptop') || devices.includes('mac') || devices.includes('windows')) {
      picks.push(formatPackage(lease));
    }
    if (risk.includes('incident') || risk.includes('urgent') || risk.includes('security')) {
      picks.push(formatHourly(urgent));
    }
    if (goals.includes('automation') || goals.includes('ai') || licenses.includes('copilot')) {
      picks.push(formatConsult(ai));
    }

    const unique = picks.filter(Boolean).filter((v, i, a) => a.indexOf(v) === i);
    const header = kb?.response_snippets?.value_prop_short || 'We secure and support your modern workplace.';
    const cta = kb?.call_to_action_templates?.discovery_call || 'Would you like a discovery call?';
    const afterHours = kb?.response_snippets?.after_hours_notice;
    const onsite = kb?.response_snippets?.onsite_notice;

    return [
      header,
      '',
      unique.length ? 'Recommended next steps:\n\n' + unique.join('\n\n') : 'I can recommend a package after a brief discovery call.',
      '',
      afterHours ? `Note: ${afterHours}` : '',
      onsite ? `Note: ${onsite}` : '',
      '',
      `${cta} (Use the Book a Meeting button below.)`
    ].filter(Boolean).join('\n');
  };

  const formatPackage = (rule: RecommendationRule | undefined): string => {
    if (!rule?.then?.package) return '';
    const name = rule.then.package;
    const price = rule.then.price_hint ? ` — ${rule.then.price_hint}` : '';
    return `• ${name}${price}`;
  };

  const formatHourly = (rule: RecommendationRule | undefined): string => {
    if (!rule?.then?.hourly) return '';
    const bh = rule.then.hourly.business_hours;
    const ah = rule.then.hourly.after_hours;
    return `• Hourly support: ${bh}; after-hours ${ah}`;
  };

  const formatConsult = (rule: RecommendationRule | undefined): string => {
    if (!rule?.then?.consult) return '';
    const bh = rule.then.consult.business_hours;
    const ah = rule.then.consult.after_hours;
    const addOns = rule.then.add_ons?.length ? `\n  Add-ons: ${rule.then.add_ons.join(', ')}` : '';
    return `• Consulting: ${bh}; after-hours ${ah}${addOns}`;
  };

  const handleQuickAction = (action: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      text: action,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: getBotResponse(action),
        isUser: false,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    
    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);
    
    setTimeout(() => {
      let text: string;
      if (isRecommending) {
        handleRecommendationAnswer(inputValue);
        text = ''; // response pushed by flow
      } else {
        text = getBotResponse(inputValue);
        const botResponse: Message = {
          id: (Date.now() + 1).toString(),
          text,
          isUser: false,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botResponse]);
      }
      setIsTyping(false);
    }, 700);
  };

  const formatMessage = (text: string) => {
    return text.split('\n').map((line, index) => (
      <span key={index}>
        {line}
        {index < text.split('\n').length - 1 && <br />}
      </span>
    ));
  };

  return (
    <div style={{ position: 'relative' }}>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            console.log('Chat button clicked!');
            setIsOpen(true);
          }}
          onMouseDown={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
          className="fixed bottom-6 right-6 z-[9999] bg-[#010775] hover:bg-[#2A3BCF] text-white p-4 rounded-full shadow-lg transition-all duration-200 hover:scale-105 cursor-pointer"
          aria-label="Open chat"
          style={{ 
            zIndex: 9999,
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            pointerEvents: 'auto'
          }}
        >
          <HiChatBubbleLeftRight className="h-6 w-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-[9999] w-96 h-[500px] bg-white rounded-2xl shadow-2xl border border-gray-200 flex flex-col" style={{ zIndex: 9999 }}>
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-[#010775] text-white rounded-t-2xl">
            <div>
              <h3 className="font-semibold">Temrink Assistant</h3>
              <p className="text-xs opacity-90">Ask me anything!</p>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 hover:bg-white/20 rounded-full transition-colors"
              aria-label="Close chat"
            >
              <HiXMark className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.isUser
                      ? 'bg-[#010775] text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  <div className="text-sm whitespace-pre-wrap">
                    {formatMessage(message.text)}
                  </div>
                  <div className={`text-xs mt-1 ${
                    message.isUser ? 'text-white/70' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                </div>
              </div>
            ))}
            
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          <div className="p-3 border-t border-gray-200">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {quickActions.map((action, index) => (
                <button
                  key={index}
                  onClick={action.action}
                  className={`text-xs p-2 rounded-lg transition-colors ${
                    action.isPrimary
                      ? 'bg-[#010775] text-white hover:bg-[#2A3BCF]'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {action.label}
                </button>
              ))}
            </div>

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 p-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#010775] focus:border-transparent"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                className="p-2 bg-[#010775] text-white rounded-lg hover:bg-[#2A3BCF] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <HiPaperAirplane className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
