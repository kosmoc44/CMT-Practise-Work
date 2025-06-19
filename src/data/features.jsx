import { Database, Calendar, BarChart, Eye, Plug, Zap } from "lucide-react";

export const features = [
  {
    title: "DATABASE",
    icon: <Database size={24} />,
    items: [
      "Unified database",
      "Quick search",
      "Interaction history",
      "Rejected drivers archive",
      "Lead sources",
    ],
  },
  {
    title: "CALENDAR",
    icon: <Calendar size={24} />,
    items: [
      "Google Calendar sync",
      "Task prioritization",
      "Follow-up tasks",
      "Event calendar",
      "Reminders",
    ],
  },
  {
    title: "ANALYTICS",
    icon: <BarChart size={24} />,
    items: [
      "Sales funnel",
      "Source performance",
      "Conversion rate",
      "Average hire time",
      "Recruiter ranking",
    ],
  },
  {
    title: "CLARITY",
    icon: <Eye size={24} />,
    items: [
      "Process stages",
      "Responsible persons",
      "Rejection reasons",
      "Activity log",
      "Step clarity",
    ],
  },
  {
    title: "INTEGRATION",
    icon: <Plug size={24} />,
    items: [
      "Shared CRM access",
      "Standardized workflow",
      "Data handoff",
      "Role-based permissions",
      "Action notifications",
    ],
  },
  {
    title: "AUTOMATION",
    icon: <Zap size={24} />,
    items: [
      "Phone integration",
      "Message templates",
      "Auto follow-ups",
      "Call recordings",
      "Automated email",
    ],
  },
];
