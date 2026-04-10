// Nigerian Tax Statutes — Structured Data for Ingestion
// Sources: CITA Cap C21 LFN 2004, PITA Cap P8 LFN 2004, VATA Cap V1 LFN 2004,
//          Finance Acts 2019-2023, Capital Gains Tax Act, Stamp Duties Act

const statutes = [

  // ─── COMPANIES INCOME TAX ACT (CITA) ───────────────────────────────────────

  {
    act_name: "CITA",
    section_number: "Section 1",
    section_title: "Imposition of tax",
    section_text: "Income tax shall be payable for each year of assessment on the profits of any company accruing in, derived from, brought into, or received in Nigeria in respect of a trade or business, rent or premium arising from a right granted to any other person for the use or occupation of any property, dividends, interest, royalties, discounts, charges or annuities, any source of annual profits or gains not falling within the preceding categories, fees, dues and allowances wherever paid for services rendered."
  },
  {
    act_name: "CITA",
    section_number: "Section 2",
    section_title: "Taxation of companies",
    section_text: "Companies Income Tax is charged on the profits of companies registered in Nigeria or companies that derive income from Nigeria. A company is liable to pay tax on its total profits from all sources for each year of assessment at the applicable rate."
  },
  {
    act_name: "CITA",
    section_number: "Section 9",
    section_title: "Dividends and other distributions",
    section_text: "Where a Nigerian company pays a dividend, the dividend shall be subject to withholding tax at the rate of 10%. The recipient company or individual shall be entitled to a credit for the withholding tax deducted. Dividends paid out of retained earnings that have already suffered tax shall not be subject to further tax in the hands of the recipient."
  },
  {
    act_name: "CITA",
    section_number: "Section 16",
    section_title: "Profits of insurance companies",
    section_text: "The profits of an insurance company shall be the gross premium and interest and other income receivable in Nigeria less re-insurance premiums, claims paid, expenses of management, and any other deductible expenses as prescribed by the Act."
  },
  {
    act_name: "CITA",
    section_number: "Section 19",
    section_title: "Franked investment income",
    section_text: "A Nigerian company that receives a dividend from another Nigerian company which has paid tax thereon shall not be liable to further companies income tax on that dividend. Such dividend is referred to as franked investment income."
  },
  {
    act_name: "CITA",
    section_number: "Section 22",
    section_title: "Artificial transactions",
    section_text: "Where the Federal Inland Revenue Service is of the opinion that any transaction which reduces or would reduce the amount of tax payable is artificial or fictitious, or that any transaction has not been made at arm's length, it may disregard such transaction and assess the parties thereto as it sees fit."
  },
  {
    act_name: "CITA",
    section_number: "Section 23",
    section_title: "Exemptions from tax",
    section_text: "The following profits shall be exempt from tax: profits of any company engaged in ecclesiastical, charitable or educational activities of a public character; profits of any statutory body established for the purpose of promoting sporting activities; interest on loans granted by a bank to a company engaged in agricultural trade or business; profits of a company whose business consists wholly of the manufacturing of goods or rendering of services solely for export."
  },
  {
    act_name: "CITA",
    section_number: "Section 25",
    section_title: "Deduction for research and development",
    section_text: "There shall be allowed as a deduction from the profits of a company for any year of assessment, any expenditure incurred by the company during that year on research and development for the purpose of the trade or business carried on by the company. The deduction shall not exceed 10% of total profit before such deduction."
  },
  {
    act_name: "CITA",
    section_number: "Section 29",
    section_title: "Allowable deductions",
    section_text: "For the purpose of ascertaining the profits or loss of a company for any period from any source, there shall be deducted all expenses incurred wholly, reasonably, exclusively and necessarily for the purpose of that source of income. This includes rent for business premises, salaries and wages, interest on borrowed capital, bad debts written off, repairs to premises, and other revenue expenses."
  },
  {
    act_name: "CITA",
    section_number: "Section 30",
    section_title: "Deductions not allowed",
    section_text: "Notwithstanding Section 29, the following shall not be deductible: capital withdrawals or payments on account of capital; any payment made to a reserve or contingency fund; income tax or similar taxes paid in Nigeria or elsewhere; domestic or private expenses; any expense not wholly and exclusively incurred for the purpose of the business."
  },
  {
    act_name: "CITA",
    section_number: "Section 40",
    section_title: "Rate of tax",
    section_text: "Companies income tax is charged at the rate of 30% on the total profits of a company for each year of assessment. As amended by the Finance Act 2019, companies with gross turnover of ₦25 million or less are exempt from CIT. Companies with gross turnover between ₦25 million and ₦100 million pay CIT at the reduced rate of 20%."
  },
  {
    act_name: "CITA",
    section_number: "Section 55",
    section_title: "Returns of income",
    section_text: "Every company shall, without notice or demand, file a self-assessment return of its total profits and tax payable thereon for each year of assessment not later than 6 months after the end of its accounting year. The return shall be in such form as the Federal Inland Revenue Service may prescribe."
  },
  {
    act_name: "CITA",
    section_number: "Section 60",
    section_title: "Minimum tax",
    section_text: "Where a company has no taxable profits, or the tax payable is less than the minimum tax, the company shall pay a minimum tax equal to 0.5% of gross turnover. Companies exempted from minimum tax include companies in their first four years of business, companies with at least 25% imported equity capital, and companies engaged in agricultural production."
  },
  {
    act_name: "CITA",
    section_number: "Section 77",
    section_title: "Penalties for non-compliance",
    section_text: "Any company that fails to file its tax returns within the prescribed time shall be liable to a penalty of ₦25,000 for the first month of default and ₦5,000 for each subsequent month in which the default continues. Additional interest at the prevailing Central Bank of Nigeria minimum rediscount rate plus 5% per annum shall apply on unpaid taxes."
  },

  // ─── PERSONAL INCOME TAX ACT (PITA) ────────────────────────────────────────

  {
    act_name: "PITA",
    section_number: "Section 1",
    section_title: "Imposition of tax",
    section_text: "Income tax shall be payable for each year of assessment on the income of every individual, community, family, trustee, executor or body of individuals chargeable with tax under this Act. Tax shall be assessed and charged in accordance with the provisions of this Act and at the rates set out in the Sixth Schedule."
  },
  {
    act_name: "PITA",
    section_number: "Section 3",
    section_title: "Incomes chargeable to tax",
    section_text: "The following incomes shall be chargeable to tax: gains or profits from any trade, business, profession or vocation; employment income including salaries, wages, fees, allowances and any other gains from employment; rent received from property; dividends, interest and discounts; pensions, charges and annuities; any other income not otherwise exempt under this Act."
  },
  {
    act_name: "PITA",
    section_number: "Section 5",
    section_title: "Residence",
    section_text: "An individual is resident in Nigeria for a year of assessment if he is domiciled in Nigeria, sojourns in Nigeria for a period or periods amounting to 183 days or more in a twelve-month period commencing in the year of assessment, or serves as a diplomat or diplomatic agent of Nigeria in a country other than Nigeria."
  },
  {
    act_name: "PITA",
    section_number: "Section 20",
    section_title: "Consolidated relief allowance",
    section_text: "Every individual shall be entitled to a consolidated relief allowance of the higher of ₦200,000 or 1% of gross income, plus 20% of gross income. This allowance is deducted from gross income before computing the taxable income of an individual. As amended by the Finance Act 2020, the consolidated relief allowance structure was retained but employers must file annual returns."
  },
  {
    act_name: "PITA",
    section_number: "Section 33",
    section_title: "PAYE — Pay As You Earn",
    section_text: "Every employer shall deduct tax from emoluments paid to employees under the Pay As You Earn (PAYE) system and remit such deductions to the relevant tax authority not later than the 10th day of the month following the month in which the deduction was made. Failure to deduct or remit makes the employer personally liable for the tax."
  },
  {
    act_name: "PITA",
    section_number: "Section 37",
    section_title: "Tax rates — Sixth Schedule",
    section_text: "Personal income tax is charged on taxable income at the following graduated rates: first ₦300,000 at 7%; next ₦300,000 at 11%; next ₦500,000 at 15%; next ₦500,000 at 19%; next ₦1,600,000 at 21%; above ₦3,200,000 at 24%. These rates apply after deducting the consolidated relief allowance and other allowable deductions."
  },
  {
    act_name: "PITA",
    section_number: "Section 42",
    section_title: "Exemptions from personal income tax",
    section_text: "The following incomes are exempt from personal income tax: statutory income of any local government; income of any cooperative society registered under any enactment relating to cooperative societies; pension and gratuity received from a Nigerian employer on retirement; income of a person employed in the Nigerian Army, Navy, Air Force or Police below the rank of Commissioned Officer."
  },
  {
    act_name: "PITA",
    section_number: "Section 81",
    section_title: "Annual returns by employers",
    section_text: "Every employer shall file annual returns showing the total emoluments paid to each employee and the total tax deducted not later than 31st January of the year following the year of assessment. The returns shall be in such form as the relevant tax authority may prescribe. Non-compliance attracts a penalty of ₦500,000 for corporate employers and ₦50,000 for individual employers."
  },

  // ─── VALUE ADDED TAX ACT (VATA) ────────────────────────────────────────────

  {
    act_name: "VATA",
    section_number: "Section 1",
    section_title: "Imposition of VAT",
    section_text: "A tax to be known as Value Added Tax (VAT) is hereby imposed and charged on the supply of all goods and services other than those listed in the First Schedule to this Act. VAT is charged at the rate of 7.5% as amended by the Finance Act 2019, previously 5%."
  },
  {
    act_name: "VATA",
    section_number: "Section 2",
    section_title: "Taxable persons",
    section_text: "A taxable person means an individual or body of individuals, family, corporation sole, trustee or executor that as a principal or agent carries on economic activities in any place. Every taxable person with an annual turnover of ₦25 million or above is required to register for VAT with the Federal Inland Revenue Service."
  },
  {
    act_name: "VATA",
    section_number: "Section 8",
    section_title: "VAT remittance",
    section_text: "A taxable person shall remit the tax charged on its supplies less input VAT deductible to the Federal Inland Revenue Service not later than the 21st day of the month following the month of collection. Returns must be filed whether or not tax is payable for the period."
  },
  {
    act_name: "VATA",
    section_number: "Section 10",
    section_title: "Zero-rated supplies",
    section_text: "The following supplies are zero-rated under the VAT Act: non-oil exports; goods and services purchased by diplomats; goods and services purchased for humanitarian donor-funded projects; services rendered outside Nigeria; airline tickets issued and paid for in Nigeria in respect of international travel."
  },
  {
    act_name: "VATA",
    section_number: "Section 11",
    section_title: "VAT exempt goods and services",
    section_text: "The following goods and services are exempt from VAT: all medical and pharmaceutical products; basic food items including rice, flour, milk, salt, vegetables, fruits; books and educational materials; baby products; fertilisers, agricultural and veterinary medicine; all exported services; plant and machinery imported for use in export processing zones."
  },
  {
    act_name: "VATA",
    section_number: "Section 15",
    section_title: "Penalties for VAT non-compliance",
    section_text: "A taxable person who fails to register for VAT shall be liable to a fine of ₦50,000 for the first month and ₦25,000 for each subsequent month of non-registration. Failure to remit VAT collected attracts a penalty of 150% of the unremitted amount plus interest at the CBN minimum rediscount rate."
  },

  // ─── FINANCE ACT 2019 ───────────────────────────────────────────────────────

  {
    act_name: "Finance Act 2019",
    section_number: "Section 2",
    section_title: "CIT exemption for small companies",
    section_text: "The Finance Act 2019 amended the Companies Income Tax Act to exempt small companies with gross turnover of ₦25 million or less from Companies Income Tax. Medium-sized companies with gross turnover between ₦25 million and ₦100 million are taxed at a reduced rate of 20% instead of the standard 30% rate."
  },
  {
    act_name: "Finance Act 2019",
    section_number: "Section 4",
    section_title: "VAT rate increase",
    section_text: "The Finance Act 2019 increased the Value Added Tax rate from 5% to 7.5% with effect from 1 February 2020. The increase was introduced to boost government revenue and fund infrastructure development across Nigeria."
  },
  {
    act_name: "Finance Act 2019",
    section_number: "Section 7",
    section_title: "Digital economy taxation",
    section_text: "The Finance Act 2019 introduced provisions to tax companies in the digital economy that have significant economic presence in Nigeria. A non-resident company that transmits, emits or receives signals, sounds, messages, images or data of any kind through electronic or wireless means to Nigeria shall be liable to tax in Nigeria."
  },
  {
    act_name: "Finance Act 2019",
    section_number: "Section 14",
    section_title: "Thin capitalisation",
    section_text: "The Finance Act 2019 introduced thin capitalisation rules limiting the deductibility of interest paid to connected persons. Interest deductions are capped at 30% of earnings before interest, tax, depreciation and amortisation (EBITDA). Excess interest may be carried forward for up to 5 years."
  },

  // ─── FINANCE ACT 2020 ───────────────────────────────────────────────────────

  {
    act_name: "Finance Act 2020",
    section_number: "Section 3",
    section_title: "Loss relief",
    section_text: "The Finance Act 2020 amended the rules on loss relief to allow companies to carry forward tax losses indefinitely. Previously losses could only be carried forward for 4 years. The amendment applies to losses incurred from the 2020 year of assessment onwards."
  },
  {
    act_name: "Finance Act 2020",
    section_number: "Section 8",
    section_title: "Real estate investment trusts",
    section_text: "The Finance Act 2020 introduced exemptions for Real Estate Investment Trusts (REITs). Income and capital gains of a REIT are exempt from tax provided the REIT distributes at least 75% of its income to unit holders annually and is listed on the Nigerian Stock Exchange."
  },
  {
    act_name: "Finance Act 2020",
    section_number: "Section 11",
    section_title: "Stamp duty on electronic transactions",
    section_text: "The Finance Act 2020 introduced stamp duty at ₦50 on electronic receipts or transfers of money deposited in any bank or financial institution on any account valued at ₦10,000 or more. This replaced previous provisions on paper-based instruments."
  },

  // ─── FINANCE ACT 2021 ───────────────────────────────────────────────────────

  {
    act_name: "Finance Act 2021",
    section_number: "Section 2",
    section_title: "Petroleum profits tax amendment",
    section_text: "The Finance Act 2021 amended the Petroleum Profits Tax Act to clarify the tax treatment of frontier oil exploration. Companies engaged in petroleum operations in frontier basins are entitled to an investment tax credit of 5% on qualifying capital expenditure."
  },
  {
    act_name: "Finance Act 2021",
    section_number: "Section 5",
    section_title: "Capital gains tax on shares",
    section_text: "The Finance Act 2021 introduced capital gains tax on the disposal of shares in Nigerian companies. Gains arising from the disposal of shares in a Nigerian company are subject to capital gains tax at the rate of 10%. Exemptions apply to shares listed on the Nigerian Stock Exchange and shares in companies with at least 25% of its issued shares listed."
  },
  {
    act_name: "Finance Act 2021",
    section_number: "Section 9",
    section_title: "Excess dividend tax",
    section_text: "Where a company pays a dividend that exceeds its taxable profits for the year, the excess dividend shall be subject to income tax as if it were the income of the company for that year. This provision prevents the distribution of untaxed income as dividends."
  },

  // ─── FINANCE ACT 2022 ───────────────────────────────────────────────────────

  {
    act_name: "Finance Act 2022",
    section_number: "Section 3",
    section_title: "Taxation of non-resident companies",
    section_text: "The Finance Act 2022 expanded provisions on the taxation of non-resident companies. A non-resident company is liable to tax on its income derived from Nigeria including technical, management, consultancy and professional services fees paid from Nigeria, regardless of where the services are rendered."
  },
  {
    act_name: "Finance Act 2022",
    section_number: "Section 6",
    section_title: "Withholding tax on construction",
    section_text: "Withholding tax on building, construction and related activities is charged at the rate of 5% for companies and 5% for individuals. The withheld tax is available as a credit against the final tax liability of the recipient. Returns of withholding tax must be filed and remitted within 21 days of the end of the month of deduction."
  },
  {
    act_name: "Finance Act 2022",
    section_number: "Section 10",
    section_title: "Transfer pricing",
    section_text: "The Finance Act 2022 strengthened transfer pricing rules requiring connected persons to conduct transactions at arm's length. The Federal Inland Revenue Service may adjust the profits of a company where transactions between related parties are not at arm's length. Penalties for transfer pricing non-compliance were increased to ₦10 million plus 1% of the value of the transaction."
  },

  // ─── CAPITAL GAINS TAX ACT ─────────────────────────────────────────────────

  {
    act_name: "Capital Gains Tax Act",
    section_number: "Section 1",
    section_title: "Charge to capital gains tax",
    section_text: "Capital gains tax is charged on the gains arising from the disposal of assets by individuals and companies. The rate of capital gains tax is 10% on the net chargeable gain. Net chargeable gain is the total chargeable gains less allowable losses arising in the same year of assessment."
  },
  {
    act_name: "Capital Gains Tax Act",
    section_number: "Section 5",
    section_title: "Assets exempt from CGT",
    section_text: "The following assets are exempt from capital gains tax: gains on disposal of a principal private residence; gains arising from the disposal of Nigerian government securities; gains arising from disposal of life assurance policies; compensation for any wrong or injury suffered by an individual in his person or in his profession or vocation."
  },
  {
    act_name: "Capital Gains Tax Act",
    section_number: "Section 8",
    section_title: "Rollover relief",
    section_text: "Where the proceeds from disposal of a business asset are reinvested in a replacement asset of the same class within 12 months before or after the disposal, the chargeable gain may be rolled over and deducted from the cost of the replacement asset. The gain is deferred until the eventual disposal of the replacement asset."
  },

  // ─── STAMP DUTIES ACT ──────────────────────────────────────────────────────

  {
    act_name: "Stamp Duties Act",
    section_number: "Section 2",
    section_title: "Instruments chargeable to stamp duty",
    section_text: "Stamp duty is chargeable on instruments specified in the Schedule to this Act. Instruments include agreements, bonds, conveyances, leases, mortgages, and share transfer forms. The duty is charged at rates varying from a fixed amount to ad valorem rates depending on the nature of the instrument."
  },
  {
    act_name: "Stamp Duties Act",
    section_number: "Section 14",
    section_title: "Stamp duty on share transfers",
    section_text: "Transfers of shares in Nigerian companies are subject to stamp duty at the rate of 0.075% of the consideration paid or the market value of the shares, whichever is higher. The duty must be paid and the instrument stamped before the transfer can be registered in the company's register of members."
  },

  // ─── INDUSTRIAL DEVELOPMENT (INCOME TAX RELIEF) ACT — PIONEER STATUS ───────

  {
    act_name: "Industrial Development Act",
    section_number: "Section 1",
    section_title: "Pioneer status incentive",
    section_text: "A company granted pioneer status under the Industrial Development (Income Tax Relief) Act is entitled to a tax holiday during the pioneer period. The pioneer period is initially 3 years and may be extended for up to 2 additional years making a maximum of 5 years. During the pioneer period the company is exempt from Companies Income Tax on its pioneer profits."
  },
  {
    act_name: "Industrial Development Act",
    section_number: "Section 4",
    section_title: "Qualifying industries for pioneer status",
    section_text: "Industries that may be granted pioneer status include manufacturing, agriculture, mining, export-oriented industries, tourism, information technology, and other industries listed in the Pioneer Industries and Products Order. The Nigerian Investment Promotion Commission processes applications for pioneer status certificates."
  },

  // ─── WITHHOLDING TAX ───────────────────────────────────────────────────────

  {
    act_name: "CITA",
    section_number: "Section 78 — Withholding Tax",
    section_title: "Withholding tax rates",
    section_text: "Withholding tax is deducted at source on various payments as follows: dividends — 10%; interest — 10%; rent — 10%; royalties — 10%; directors fees — 10%; technical, management and consultancy fees — 10% for companies, 5% for individuals; building and construction — 5%; contracts and agency arrangements — 5%; supplies — 5%. The withheld tax is remitted to FIRS by the 21st of the following month."
  }

];

module.exports = statutes;
