const ageClassification = (num) => {
  return num < 0
    ? null
    : num <= 24
    ? "Дитинство"
    : num <= 44
    ? "Молодість"
    : num <= 65
    ? "Зрілість"
    : num <= 75
    ? "Старість"
    : num <= 90
    ? "Довголіття"
    : num <= 122
    ? "Рекорд"
    : null;
};

describe("Тестування ageClassification", () => {
  test("Повертає null для негативних чисел", () => {
    expect(ageClassification(-1)).toBe(null);
    expect(ageClassification(-0.1)).toBe(null);
  });

  test("Класифікує дитинство (0-24)", () => {
    expect(ageClassification(0)).toBe("Дитинство");
    expect(ageClassification(24)).toBe("Дитинство");
  });

  test("Класифікує молодість (24.01-44)", () => {
    expect(ageClassification(24.01)).toBe("Молодість");
    expect(ageClassification(44)).toBe("Молодість");
  });

  test("Класифікує зрілість (44.01-65)", () => {
    expect(ageClassification(44.01)).toBe("Зрілість");
    expect(ageClassification(65)).toBe("Зрілість");
  });

  test("Класифікує старість (65.1-75)", () => {
    expect(ageClassification(65.1)).toBe("Старість");
    expect(ageClassification(75)).toBe("Старість");
  });

  test("Класифікує довголіття (75.01-90)", () => {
    expect(ageClassification(75.1)).toBe("Довголіття");
    expect(ageClassification(90)).toBe("Довголіття");
  });

  test("Класифікує рекорд (90.01-122)", () => {
    expect(ageClassification(90.1)).toBe("Рекорд");
    expect(ageClassification(122)).toBe("Рекорд");
  });

  test("Повертає null для значень більше 122", () => {
    expect(ageClassification(122.1)).toBe(null);
    expect(ageClassification(150)).toBe(null);
  });
});
