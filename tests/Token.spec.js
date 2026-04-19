
import { test, expect } from '@playwright/test';

test('QR Token Generation', async ({ page }) => {
  // Base URL
  await page.goto('https://qrdev.deepmindlabs.ai/');
  const branchName = 'Motijheel';
  const phoneNumber = '01773537279';
  const fullName = 'Showrov';
  const otpCode = '123456';

  // Locator
  const branchDropdown = page.getByRole('combobox');
  const branchOption = page.getByRole('option', { name: branchName });
  const startCheckInBtn = page.getByRole('button', { name: 'Start check-in' });
  const getTokenBtn = page.getByRole('button', { name: 'Get Your Token' }).nth(1);
  const cashServiceBtn = page.getByRole('button', { name: 'Cash Services' });
  const depositBtn = page.getByRole('button', { name: 'Deposit / Withdrawal' });
  
  // Input
  const phoneInput = page.getByRole('textbox', { name: '01711112233' });
  const nameInput = page.getByRole('textbox', { name: 'Enter your full name' });
  const otpInput = page.getByRole('textbox', { name: 'Verification code' });
  
  // Button
  const submitBtn = page.getByRole('button', { name: 'Submit' }).nth(1);
  const verifyBtn = page.getByRole('button', { name: 'Verify & continue →' });

  // Branch selection and test
  await branchDropdown.click();
  await branchOption.click();
  await startCheckInBtn.click();

  // service selection
  await getTokenBtn.click();
  await cashServiceBtn.click();
  await depositBtn.click();

  // Customer information
  await phoneInput.fill(phoneNumber);
  await nameInput.fill(fullName);
  await submitBtn.click();

  // OTP verification
  await otpInput.fill(otpCode);
  await verifyBtn.click();

// Assertion
  const header = page.locator('header');
  await expect(header).toContainText('Token:'); 
  
});
