import { Box } from "@mui/material";
import GenericSelectionStep from "./steps/GenericSelectionStep";
import PersonalDetailsStep from "./steps/PersonalDetailsStep";

// Import all data sources
import {
  PROGRAMS,
  PG_TYPES,
  QUALIFICATIONS,
  ACADEMIC_PERFORMANCE,
  EXPERIENCE,
  INTERESTS,
  BUDGETS,

  // NEW IMPORTS
  COURSE_PURPOSE,
  WORKING_FIELDS,
  SALARY_RANGES,
  COURSE_LEVELS,
  STUDY_ABROAD_ANNUAL_BUDGETS,
  STUDY_ABROAD_COUNTRIES,
} from "../../data/multiStepFormData";

export default function StepRenderer({ stepKey, data, setData, goNext }) {

  // Helper to render GenericSelectionStep
  const renderGeneric = (options, valueKey) => (
    <GenericSelectionStep
      key={valueKey} // force remount per step
      options={options}
      selectedValue={data[valueKey]}
      onSelect={(val) => setData({ ...data, [valueKey]: val })}
      goNext={goNext}
    />
  );

  switch (stepKey) {
    case "program":
      return renderGeneric(PROGRAMS, "program");

    case "pgType":
      return renderGeneric(PG_TYPES, "pgType");

    case "qualification":
      // Filter logic: if Program is "PG", hide "12th"
      // "12th" has value="12th" in QUALIFICATIONS
      const filteredQualifications =
        data.program === "PG"
          ? QUALIFICATIONS.filter((q) => q.value !== "12th")
          : QUALIFICATIONS;

      return renderGeneric(filteredQualifications, "qualification");

    case "academic":
      return renderGeneric(ACADEMIC_PERFORMANCE, "academic");

    case "experience":
      return renderGeneric(EXPERIENCE, "experience");

    case "interest":
      return renderGeneric(INTERESTS, "interest");

    case "budget":
      return renderGeneric(BUDGETS, "budget");

    /* ========= CERTIFICATION ========= */

    case "workingField":
      return renderGeneric(WORKING_FIELDS, "workingField");

    case "salary":
      return renderGeneric(SALARY_RANGES, "salary");

    case "purpose":
      return renderGeneric(COURSE_PURPOSE, "purpose");

    /* ========= STUDY ABROAD ========= */

    case "courseLevel":
      return renderGeneric(COURSE_LEVELS, "courseLevel");

    case "country":
      return renderGeneric(
        STUDY_ABROAD_COUNTRIES.map((c) => ({
          label: c.name,
          value: c.name,
          subLabel: c.code.toUpperCase(),
          flag: `https://flagcdn.com/w80/${c.code}.png`,
        })),
        "country"
      );


    case "annualBudget":
      return renderGeneric(
        STUDY_ABROAD_ANNUAL_BUDGETS,
        "annualBudget"
      );

    /* ========= FINAL ========= */

    case "final":
      return (
        <PersonalDetailsStep
          data={data}
          setData={(newData) => setData({ ...data, ...newData })}
        />
      );

    default:
      return (
        <Box sx={{ p: 3, color: "red", fontWeight: 600 }}>
          Unknown Step: {stepKey}
        </Box>
      );
  }
}
