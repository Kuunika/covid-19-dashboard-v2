import { IDosageIndicator } from "../interfaces";

export default function getDosages(dosageIndicators: IDosageIndicator[]) {
  const doseNumber = (dosage: IDosageIndicator) =>
    dosage.dosageNumber.toString().replaceAll(" ", "").toLowerCase();

  const boosterShots = dosageIndicators.filter(
    (dosage) => doseNumber(dosage) === "boosterdosage"
  );

  const dosages = dosageIndicators
    .filter((dosage) => doseNumber(dosage) !== "boosterdosage")
    .sort((a, b) => {
      const doseOne = Number(a.dosageNumber);
      const doseTwo = Number(b.dosageNumber);

      return doseOne - doseTwo;
    });

  return { dosages, boosterShots };
}
