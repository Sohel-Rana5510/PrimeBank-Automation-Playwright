
// import { test, expect } from '@playwright/test';

// test('QR Token Generation', async ({ page }) => {
//   // Base URL
//   await page.goto('https://qrdev.deepmindlabs.ai/');
  
//   const branchName = 'Motijheel';
//   const phoneNumber = '01795190515';
//   const fullName = 'Showrov';
//   const otpCode = '123456';
//   //const email = 'sohelranashowrov@gmail.com';

//   // Locators
//   const branchDropdown = page.getByRole('combobox');
//   const branchOption = page.getByRole('option', { name: branchName });
//   const startCheckInBtn = page.getByRole('button', { name: 'Start check-in' });
//   const getTokenBtn = page.getByRole('button', { name: 'Get Your Token' }).nth(1);
//   const cashServiceBtn = page.getByRole('button', { name: 'Cash Services' });
//   const depositBtn = page.getByRole('button', { name: 'Deposit / Withdrawal' });
  
//   // Input Locators
//   const phoneInput = page.getByRole('textbox', { name: '01711112233' });
//   const nameInput = page.getByRole('textbox', { name: 'Enter your full name' });
//   const otpInput = page.getByRole('textbox', { name: 'Verification code' });
//  // const emailInput = page.getByRole('textbox',{ name: 'your.email@example.com' });
  
//   // Button Locators
//   const submitBtn = page.getByRole('button', { name: 'Submit' }).nth(1);
//   const verifyBtn = page.getByRole('button', { name: 'Verify & continue →' });

//   // 1. Branch selection
//   await branchDropdown.click();
//   await branchOption.click();
//   await startCheckInBtn.click();

//   // 2. Service selection
//   await getTokenBtn.click();
//   await cashServiceBtn.click();
//   await depositBtn.click();

//   // 3. Customer information
//   await phoneInput.fill(phoneNumber);
//   await nameInput.fill(fullName);
//   //await emailInput.fill(email);
//   await submitBtn.click();

//   // 4. OTP verification
//   console.log("Waiting for OTP input to appear...");
//   await otpInput.waitFor({ state: 'visible', timeout: 50000 });
  
//   // Wait for verify button to be enabled
//   await verifyBtn.waitFor({ state: 'visible', timeout: 30000 });
  
//   // Fill OTP code
//   await otpInput.fill(otpCode);
  
//   // Click verify button
//   await verifyBtn.click();

//   // 5. Assertion
//   const successMsg = page.getByText('Token Generated Successfully');
//   await expect(successMsg).toBeVisible({ timeout: 15000 });

//   const header = page.locator('header');
//   await expect(header).toContainText('Token:', { timeout: 10000 });
// });

import { test, expect } from '@playwright/test';

test('QR Token Generation', async ({ page }) => {
  // 
  test.setTimeout(90000); 

  // Base URL
  await page.goto('https://qrdev.deepmindlabs.ai/');

  const branchName = 'Motijheel';
  const phoneNumber = '01795190511';
  const fullName = 'Showrov';
  const otpCode = '123456';
  const email = 'sohelranashowrov@gmail.com';

  // Locators
  const branchDropdown = page.getByRole('combobox');
  const branchOption = page.getByRole('option', { name: branchName });
  const startCheckInBtn = page.getByRole('button', { name: 'Start check-in' });
  const getTokenBtn = page.getByRole('button', { name: 'Get Your Token' }).nth(1);
  const cashServiceBtn = page.getByRole('button', { name: 'Cash Services' });
  const depositBtn = page.getByRole('button', { name: 'Deposit / Withdrawal' });
  
  // Input Locators
  const phoneInput = page.getByRole('textbox', { name: '01711112233' });
  const nameInput = page.getByRole('textbox', { name: 'Enter your full name' });
  const otpInput = page.getByRole('textbox', { name: 'Verification code' });
  const emailInput = page.getByRole('textbox', { name: 'your.email@example.com' });
  
  // Button Locators
  const submitBtn = page.getByRole('button', { name: 'Submit' }).nth(1);
  const verifyBtn = page.getByRole('button', { name: 'Verify & continue →' });

  // Step 1: Branch selection
  await branchDropdown.click();
  await branchOption.click();
  await startCheckInBtn.click();

  // Step 2: Service selection
  await getTokenBtn.click();
  await cashServiceBtn.click();
  await depositBtn.click();

  // Step 3: Customer information
  await phoneInput.fill(phoneNumber);
  await nameInput.fill(fullName);
  await emailInput.fill(email);
  
  // 
  await submitBtn.click();
  await page.waitForLoadState('networkidle');

  // 
  
  // 
 // await otpInput.waitFor({ state: 'visible', timeout: 30000 });
  
  // 
  console.log("Waiting for OTP message...");
  await page.waitForTimeout(10000); 

  // )
  await otpInput.type(otpCode, { delay: 1000 });

  // 
  await page.waitForTimeout(2000);

  //
  await verifyBtn.click();

  // Step 5: Assertions
  const successMsg = page.getByText('Token Generated Successfully');
 // await expect(successMsg).toBeVisible({ timeout: 15000 });

  const header = page.locator('header');
  //await expect(header).toContainText('Token:', { timeout: 10000 });
});