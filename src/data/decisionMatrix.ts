export interface DecisionMatrixRow {
  users: string;
  licenses: string;
  security: string;
  devicesNeeded: string;
  recommendation: string;
}

export const decisionMatrixData: DecisionMatrixRow[] = [
  {
    users: "1–10",
    licenses: "Any",
    security: "Low",
    devicesNeeded: "No",
    recommendation: "Essential IT Support"
  },
  {
    users: "1–10",
    licenses: "Any",
    security: "Low",
    devicesNeeded: "Yes",
    recommendation: "Essential IT Support + Managed Device Leasing — Essential (Windows/Mac)"
  },
  {
    users: "1–10",
    licenses: "Any or M365 Premium",
    security: "High",
    devicesNeeded: "No",
    recommendation: "Advanced IT & Security"
  },
  {
    users: "1–10",
    licenses: "Any or M365 Premium",
    security: "High",
    devicesNeeded: "Yes",
    recommendation: "Advanced IT & Security + Managed Device Leasing — Advanced (Windows/Mac)"
  },
  {
    users: "11–19",
    licenses: "Mixed",
    security: "Any",
    devicesNeeded: "No",
    recommendation: "Cloud-Optimized IT"
  },
  {
    users: "11–19",
    licenses: "Mixed",
    security: "Any",
    devicesNeeded: "Yes",
    recommendation: "Cloud-Optimized IT + Managed Device Leasing (tier based on risk)"
  },
  {
    users: "20+",
    licenses: "Any",
    security: "High",
    devicesNeeded: "Optional",
    recommendation: "Fully Managed IT (+ consider Device Leasing if refreshing fleet)"
  },
  {
    users: "Any",
    licenses: "M365 Premium present",
    security: "Any",
    devicesNeeded: "Optional",
    recommendation: "Ensure Advanced IT & Security coverage for Premium seats"
  }
];

