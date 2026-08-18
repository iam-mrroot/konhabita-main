"use client";

import ExpertiseDetailPage from "./ExpertiseDetailPage";
import { planningExpertise } from "@/data/planningExpertise";

export default function PlanningExpertise() {
  return <ExpertiseDetailPage data={planningExpertise} />;
}
