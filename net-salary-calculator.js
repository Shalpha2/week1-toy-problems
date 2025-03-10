// Net Salary Calculator Function


function calculateNetSalary(basicSalary, benefits) {
    // Step 1: Calculate Gross Salary (Basic Salary + Benefits)
    const grossSalary = basicSalary + benefits;
  
    // Step 2: Calculate PAYE (Income Tax) Based on Updated Tax Bands
    let payee = 0;
  
    if (grossSalary <= 24000) {
      payee = grossSalary * 0.10; // 10% tax for up to KShs 24,000
    } else if (grossSalary <= 32333) {
      payee = 24000 * 0.10 + (grossSalary - 24000) * 0.25; // 25% tax for KShs 24,001 - 32,333
    } else if (grossSalary <= 500000) {
      payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (grossSalary - 32333) * 0.30; // 30% tax for KShs 32,334 - 500,000
    } else if (grossSalary <= 800000) {
      payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (grossSalary - 500000) * 0.325; // 32.5% tax for KShs 500,001 - 800,000
    } else {
      payee = 24000 * 0.10 + (32333 - 24000) * 0.25 + (500000 - 32333) * 0.30 + (800000 - 500000) * 0.325 + (grossSalary - 800000) * 0.35; // 35% tax for above KShs 800,000
    }
  
    // Step 3: Calculate SHIF Deduction (2.75% of Gross Salary)
    const shifDeduction = grossSalary * 0.0275;
  
    // Step 4: Calculate NSSF Contributions
    let nssfEmployeeContribution = 0;
    let nssfEmployerContribution = 0;
  
    if (grossSalary <= 8000) {
      nssfEmployeeContribution = grossSalary * 0.06; // 6% for Tier I
      nssfEmployerContribution = grossSalary * 0.06; // 6% for Tier I
    } else if (grossSalary <= 72000) {
      nssfEmployeeContribution = 480; // 6% of KShs 8,000
      nssfEmployerContribution = 480; // 6% of KShs 8,000
    } else {
      nssfEmployeeContribution = 4320; // 6% of KShs 72,000
      nssfEmployerContribution = 4320; // 6% of KShs 72,000
    }
  
    // Step 5: Calculate Affordable Housing Levy (1.5% of Gross Salary)
    const housingLevy = grossSalary * 0.015;
  
    // Step 6: Calculate Net Salary
    const totalDeductions = payee + shifDeduction + nssfEmployeeContribution + housingLevy;
    const netSalary = grossSalary - totalDeductions;
  
    // Return the results
    return {
      grossSalary: grossSalary,
      payee: payee,
      shifDeduction: shifDeduction,
      nssfEmployeeContribution: nssfEmployeeContribution,
      housingLevy: housingLevy,
      totalDeductions: totalDeductions,
      netSalary: netSalary
    };
  }


  const basicSalary = 55000;  // Example basic salary (in KShs)
const benefits = 10000;      // Example benefits (in KShs)

// Call the function and store the result
const salaryDetails = calculateNetSalary(basicSalary, benefits);

// Log the result to the console
console.log(salaryDetails);
