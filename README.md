# Playwright POM Automation – Swag Labs

automation framework : **Playwright** with **JavaScript** and **Page Object Model (POM)** 
The application under test is **https://www.saucedemo.com/**.

---


- Playwright Test
- JavaScript (ES Modules)
- Node.js (>=18)
- Allure Reporter
- Page Object Model (POM)

---

## Project Structure

PLAYWRIGHT-POM-AUTOMATION/
├── cart/
│   ├── cartactions.js
│   │   ├─ getProductNames()
│   │   ├─ getProductPrices()
│   │   └─ checkout()
│   └── cartobjects.js
│       ├─ checkoutButton
│       ├─ productNames
│       └─ productPrices
├── checkout/
│   ├── checkoutactions.js
│   │   ├─ fillCheckoutInfo()
│   │   ├─ getTotalPrice()
│   │   ├─ finishOrder()
│   │   └─ getSuccessMessage()
│   └── checkoutobjects.js
│       ├─ firstName
│       ├─ lastName
│       ├─ postalCode
│       ├─ continueBtn
│       ├─ finishBtn
│       ├─ totalLabel
│       └─ successMsg
├── login/
│   ├── loginactions.js
│   │   ├─ loginUser()
│   │   └─ getErrorMessage()
│   └── loginobjects.js
│       ├─ usernameInput
│       ├─ passwordInput
│       ├─ loginButton
│       └─ errorMessage
├── products/
│   ├── productsactions.js
│   │   ├─ resetAppState()
│   │   ├─ logout()
│   │   ├─ logoutAfterReset()
│   │   ├─ addItems(count)
│   │   ├─ sortZtoA()
│   │   ├─ addFirstItem()
│   │   └─ goToCart()
│   └── productsobjects.js
│       ├─ menuButton
│       ├─ resetApp
│       ├─ logout
│       ├─ filter
│       ├─ addToCartBtn
│       └─ cartIcon
├── specs/
│   ├── LockedUser.spec.js
│   │   └─ Ques 1: "Locked out user verify"
│   ├── StanderdUser.spec.js
│   │   └─ Ques 2: "Standard user checkout process"
│   └── PerformanceUser.spec.js
│       └─ Ques 3 "Performance glitch user checkout process"
├── playwright.config.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

For Executing in Terminal 

```bash
npm install
npx allure generate ./allure-results -o ./allure-report --clean
npx allure open ./allure-report
```


