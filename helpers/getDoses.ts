import { IDosageIndicator } from "../interfaces";

export function getDosages(dosageIndicators: any) {
  const doseNumber = (dosage: any) =>
    dosage.dosageNumber.toString().replace(" ", "").toLowerCase();

  const boosterShots = dosageIndicators.filter(
    (dosage: any) => doseNumber(dosage) === "boosterdosage"
  );

  const dosages = dosageIndicators
    .filter((dosage: any) => doseNumber(dosage) !== "boosterdosage")
    .sort((a, b) => {
      const doseOne = Number(a.dosageNumber);
      const doseTwo = Number(b.dosageNumber);

      return doseOne - doseTwo;
    });

  return { dosages, boosterShots };
}
