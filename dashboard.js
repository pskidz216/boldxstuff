// Customer data
const customerData = [
    { name: "ITT Aerospace", revenue: 1164770, tier: "High" },
    { name: "Trimble Navigation Dayton", revenue: 889114, tier: "High" },
    { name: "Eaton Corp/Bethel", revenue: 876987, tier: "High" },
    { name: "Caterpillar Engine Systems, Inc.", revenue: 852089, tier: "High" },
    { name: "Caterpillar/Tecmosa", revenue: 837232, tier: "High" },
    { name: "Caterpillar Inc. LD353", revenue: 657942, tier: "High" },
    { name: "L3 Harris", revenue: 576812, tier: "High" },
    { name: "Cummins Rocky Mount Engine Plant (RMEP)", revenue: 695401, tier: "High" },
    { name: "REVOLOK USA LLC", revenue: 476424, tier: "Mid" },
    { name: "Sumida America, Inc.", revenue: 471019, tier: "Mid" },
    { name: "Clippard Instrument Laboratory, Inc.", revenue: 424678, tier: "Mid" },
    { name: "Cone Drive Operations, Inc.", revenue: 367280, tier: "Mid" },
    { name: "Arrow Electronics", revenue: 333581, tier: "Mid" },
    { name: "Steris Corporation", revenue: 310483, tier: "Mid" },
    { name: "Weston Advanced Sensors (MEXICO)", revenue: 302641, tier: "Mid" },
    { name: "Williams International Co., LLC", revenue: 275509, tier: "Mid" },
    { name: "Resonetics", revenue: 253017, tier: "Mid" },
    { name: "Westport Fuel Systems Italia S.r.I.", revenue: 236273, tier: "Mid" },
    { name: "Weston Aerospace Limited", revenue: 199375, tier: "Mid" },
    { name: "Honeywell ACS Sensing & Control/Freeport", revenue: 197743, tier: "Mid" },
    { name: "Cummins Juarez Fuel Systems (JFS)", revenue: 184761, tier: "Mid" },
    { name: "Eaton Aerospace/Glen", revenue: 165123, tier: "Mid" },
    { name: "Waygate Technologies, USA, LP - Baker Hughes-", revenue: 156969, tier: "Mid" },
    { name: "Hydra-Electric", revenue: 154196, tier: "Mid" },
    { name: "Eaton Interconnect (Cooper Interconnect)", revenue: 151789, tier: "Mid" },
    { name: "Baker Hughes - Reuter-Stokes, LLC", revenue: 149322, tier: "Mid" },
    { name: "AI-TEK Instruments, LLC", revenue: 148708, tier: "Mid" },
    { name: "Benchmark Connector", revenue: 142747, tier: "Mid" },
    { name: "Celestica International LP (6200)", revenue: 129244, tier: "Mid" },
    { name: "Boston Scientific De Costa Rica SRL", revenue: 128319, tier: "Mid" },
    { name: "Cummins Jamestown Engine Plant", revenue: 122520, tier: "Mid" },
    { name: "Ducommun Labarge Technologies, Inc", revenue: 121603, tier: "Mid" },
    { name: "Beretta USA Corporation", revenue: 116876, tier: "Mid" },
    { name: "Interstate-McBee", revenue: 115116, tier: "Mid" },
    { name: "EME Elektro-Metall", revenue: 114522, tier: "Mid" },
    { name: "Safran Landing Systems Kentucky, LLC", revenue: 114479, tier: "Mid" },
    { name: "Powell Electronics", revenue: 112250, tier: "Mid" },
    { name: "Cummins Fuel Systems Plant", revenue: 101152, tier: "Mid" },
    { name: "PCB Piezotronics", revenue: 100681, tier: "Mid" },
    { name: "Parker Hannifin Corporation/Quick Couplings NE", revenue: 100249, tier: "Mid" },
    { name: "CAT REMAN POWERTRAIN IN", revenue: 95228, tier: "Mid" },
    { name: "Custom Control Sensors, LLC", revenue: 90863, tier: "Mid" },
    { name: "Parker Hannifin/Sporlan Division", revenue: 86618, tier: "Mid" },
    { name: "Air Electro, Inc.", revenue: 84281, tier: "Mid" },
    { name: "Spectra Precision, (USA) LLC", revenue: 80260, tier: "Mid" },
    { name: "Mil-Aero Solutions, Inc.", revenue: 76976, tier: "Mid" },
    { name: "Interstate Connecting Components", revenue: 75421, tier: "Mid" },
    { name: "Unlimited Electronics Corp", revenue: 54856, tier: "Mid" },
    { name: "T-Systems", revenue: 54253, tier: "Mid" },
    { name: "Apollo Aerospace Components", revenue: 53795, tier: "Mid" },
    { name: "Baker Hughes Sensing&Inspection(Changzhou)", revenue: 53229, tier: "Mid" },
    { name: "FDH Electronics", revenue: 50008, tier: "Mid" },
    { name: "Otto Tech Systems", revenue: 50000, tier: "Low" },
    { name: "Biomerics", revenue: 48382, tier: "Low" },
    { name: "Spectrum Associates, Inc.", revenue: 47524, tier: "Low" },
    { name: "Rocker Industries", revenue: 43765, tier: "Low" },
    { name: "Electronic Services Intl", revenue: 43117, tier: "Low" },
    { name: "SHANGHAI E-XIE PRECISION MACHINERY CO LTD", revenue: 42000, tier: "Low" },
    { name: "Ametek Aerospace", revenue: 37794, tier: "Low" },
    { name: "Safran Landing Systems SAS (FR)", revenue: 36576, tier: "Low" },
    { name: "HarcoSemco Instruments, LLC", revenue: 35354, tier: "Low" },
    { name: "Safran Power Sarasota", revenue: 35184, tier: "Low" },
    { name: "Boeing Distribution Services, Inc.", revenue: 34912, tier: "Low" },
    { name: "Benchmark Electronics (Thailand) PCL", revenue: 30586, tier: "Low" },
    { name: "Parker Lord Corporation", revenue: 25503, tier: "Low" },
    { name: "Horstman, Inc.", revenue: 25028, tier: "Low" },
    { name: "American Aerospace Controls, Inc", revenue: 24972, tier: "Low" },
    { name: "GW Lisk Co., Inc.", revenue: 24820, tier: "Low" },
    { name: "Banner Service Corporation", revenue: 23216, tier: "Low" },
    { name: "Jacon Fasteners & Electronics", revenue: 20239, tier: "Low" },
    { name: "Arizona Components Company, Inc", revenue: 19370, tier: "Low" },
    { name: "Druck Limited", revenue: 17655, tier: "Low" },
    { name: "MS Electronix, Inc.", revenue: 17296, tier: "Low" },
    { name: "Honeywell ACS Sensing & Control/Columbus", revenue: 16643, tier: "Low" },
    { name: "Precision Resource, Inc. Connecticut Division", revenue: 16616, tier: "Low" },
    { name: "Southern Source Industrial Services, LLC", revenue: 16361, tier: "Low" },
    { name: "Tyco Fire & Security Gmbh", revenue: 16241, tier: "Low" },
    { name: "MEASURE TECH, INC.", revenue: 14411, tier: "Low" },
    { name: "Northrop Grumman Systems Corp.", revenue: 14119, tier: "Low" },
    { name: "PARPRO, INC", revenue: 12833, tier: "Low" },
    { name: "Honeywell Aerospace Toronto (Celestica)", revenue: 12432, tier: "Low" },
    { name: "Valcor Engineering Corporation", revenue: 12044, tier: "Low" },
    { name: "Eaton Corp/LA", revenue: 11764, tier: "Low" },
    { name: "Outman Industries, Inc.", revenue: 11320, tier: "Low" },
    { name: "Danfoss Power Solutions II, LLC", revenue: 11124, tier: "Low" },
    { name: "CB Technologies, Inc", revenue: 10000, tier: "Low" },
    { name: "SUCO ESI North America", revenue: 9597, tier: "Low" },
    { name: "Auxitrol Weston Advanced Sensors", revenue: 9567, tier: "Low" },
    { name: "Measurement Specialties, Inc./TE Connectivity", revenue: 8694, tier: "Low" },
    { name: "L3 Fuzing & Ordnance Systems Inc", revenue: 8259, tier: "Low" },
    { name: "ITT Enidine, Inc.", revenue: 8188, tier: "Low" },
    { name: "PPI - Time Zero Inc. dba Virtex", revenue: 8086, tier: "Low" },
    { name: "Warren Screw Products, Inc.", revenue: 7967, tier: "Low" },
    { name: "Cummins Ceva (US)", revenue: 7517, tier: "Low" },
    { name: "Gemini Electronic Components", revenue: 7433, tier: "Low" },
    { name: "BMD Electronics & Hardware Inc.", revenue: 7097, tier: "Low" },
    { name: "Parker Hannifin Corp./New Haven IN", revenue: 6734, tier: "Low" },
    { name: "Caterpillar, Inc. - N4", revenue: 6619, tier: "Low" },
    { name: "Micro Stamping", revenue: 6579, tier: "Low" },
    { name: "TE Connectivity Corporation", revenue: 6478, tier: "Low" },
    { name: "DLA Land and Maritime", revenue: 6363, tier: "Low" },
    { name: "Pro-System, Inc.", revenue: 6318, tier: "Low" },
    { name: "Tyco Fire & Security GmbH (Reynosa)", revenue: 6155, tier: "Low" },
    { name: "Deltec, Inc.", revenue: 5907, tier: "Low" },
    { name: "Trelleborg Sealing Solutions/Seals Div.", revenue: 5851, tier: "Low" },
    { name: "Sigma-Netics, Inc", revenue: 5716, tier: "Low" },
    { name: "Plexus (Xiamen ) Co., Ltd", revenue: 5283, tier: "Low" },
    { name: "Roscid Technologies, Inc.", revenue: 5221, tier: "Low" },
    { name: "Umarex Sportwaffen GmbH & Co. KG", revenue: 4945, tier: "Low" },
    { name: "REM Products, Inc.", revenue: 4826, tier: "Low" },
    { name: "Action Research Corporation", revenue: 3753, tier: "Low" },
    { name: "Dytran Instruments, Inc. USA", revenue: 3715, tier: "Low" },
    { name: "AMC Technology, Inc./Mipro", revenue: 3610, tier: "Low" },
    { name: "Jabil Circuit de Chihuahua", revenue: 3498, tier: "Low" },
    { name: "Van Lock Company", revenue: 3467, tier: "Low" },
    { name: "Cobham Mission Systems Orchard Park Inc.", revenue: 3283, tier: "Low" },
    { name: "Pole Zero Corporation", revenue: 3226, tier: "Low" },
    { name: "Astemo Americas, Inc.", revenue: 2890, tier: "Low" },
    { name: "CBOL Corporation", revenue: 2835, tier: "Low" },
    { name: "Wilcoxon Sensing Technologies", revenue: 2787, tier: "Low" },
    { name: "Fluid Components International, LLC", revenue: 2736, tier: "Low" },
    { name: "Blue Origin, LLC", revenue: 2719, tier: "Low" },
    { name: "Spacecraft Components", revenue: 2699, tier: "Low" },
    { name: "Industrial Research & Dev.", revenue: 2678, tier: "Low" },
    { name: "Air Cost Control USA, LLC", revenue: 2656, tier: "Low" },
    { name: "SIRCA-TEC, Inc.", revenue: 2600, tier: "Low" },
    { name: "NMG Aerospace", revenue: 2432, tier: "Low" },
    { name: "Hartmann's, Inc.", revenue: 2290, tier: "Low" },
    { name: "WWD USA Group, LLC", revenue: 2233, tier: "Low" },
    { name: "Ao Yi Aerospace & Technology Co Ltd", revenue: 2208, tier: "Low" },
    { name: "H.K. Technologies, Inc.", revenue: 2126, tier: "Low" },
    { name: "Diamond Fasteners", revenue: 2023, tier: "Low" },
    { name: "Sharp Fluidics", revenue: 2000, tier: "Low" },
    { name: "Allied Defense Industries, LLC", revenue: 1943, tier: "Low" },
    { name: "RAM Precision Industries", revenue: 1894, tier: "Low" },
    { name: "CSI Aerospace-Heico", revenue: 1663, tier: "Low" },
    { name: "Apollo Aerospace Components Ltd.", revenue: 1575, tier: "Low" },
    { name: "Standard Radio Electrical Components", revenue: 1562, tier: "Low" },
    { name: "SAPA Transmission", revenue: 1519, tier: "Low" },
    { name: "Rhausler, Inc.", revenue: 1428, tier: "Low" },
    { name: "QuinStar Technology, Inc.", revenue: 1382, tier: "Low" },
    { name: "Honeywell ACS Sensing & Control/Boyne City", revenue: 1260, tier: "Low" },
    { name: "Active Electronics Plc", revenue: 1194, tier: "Low" },
    { name: "Ensign-Bickford Aerospace & Defense Company", revenue: 1161, tier: "Low" },
    { name: "TopWorx, Inc.", revenue: 1147, tier: "Low" },
    { name: "ASteelflash Group- C/O Catalyst", revenue: 1142, tier: "Low" },
    { name: "Connective Inc.", revenue: 1032, tier: "Low" },
    { name: "Complete Grinding Solutions", revenue: 980, tier: "Low" },
    { name: "Thermo Est", revenue: 948, tier: "Low" },
    { name: "Cummins Memphis Distribution Center", revenue: 929, tier: "Low" },
    { name: "Matrix Machine", revenue: 918, tier: "Low" },
    { name: "AE&C Services LLC", revenue: 900, tier: "Low" },
    { name: "BTC Electronics", revenue: 838, tier: "Low" },
    { name: "ALA UK", revenue: 767, tier: "Low" },
    { name: "Sherburn Electronics, Inc.", revenue: 747, tier: "Low" },
    { name: "Cornerstone Research Group Inc.", revenue: 711, tier: "Low" },
    { name: "Rosemount Specialty Products, LLC", revenue: 634, tier: "Low" },
    { name: "Carnegie Mellon Chemistry", revenue: 566, tier: "Low" },
    { name: "BJG Electronics Inc.", revenue: 555, tier: "Low" },
    { name: "Valve Research & Manufacturing Company", revenue: 509, tier: "Low" },
    { name: "ALA Germany GmbH", revenue: 491, tier: "Low" },
    { name: "DARE Electronics Inc", revenue: 475, tier: "Low" },
    { name: "GMI Corporation", revenue: 464, tier: "Low" },
    { name: "Nasco Aerospace and Electronics", revenue: 434, tier: "Low" },
    { name: "Kelly Manufacturing Company", revenue: 415, tier: "Low" },
    { name: "VRG Components, Inc.", revenue: 369, tier: "Low" },
    { name: "PHS/MWA AVIATION SERVICES", revenue: 350, tier: "Low" },
    { name: "Gas Turbine Efficiency, LLC", revenue: 348, tier: "Low" },
    { name: "ADI American Distributors, LLC", revenue: 320, tier: "Low" },
    { name: "Cyient Ltd", revenue: 299, tier: "Low" },
    { name: "Heico Component Repair Group", revenue: 238, tier: "Low" },
    { name: "EZ Form Cable Corp.", revenue: 219, tier: "Low" },
    { name: "B&J Tech, Inc.", revenue: 213, tier: "Low" },
    { name: "Adamco Industries, LLC", revenue: 162, tier: "Low" },
    { name: "ESP Associates, Inc", revenue: 135, tier: "Low" },
    { name: "Asa Environmental Products, Inc.", revenue: 115, tier: "Low" },
    { name: "Caterpillar Inc. LD-235", revenue: 76, tier: "Low" },
    { name: "Intellisense Systems, Inc", revenue: 50, tier: "Low" }
];

// Initialize dashboard
function initializeDashboard() {
    const high = customerData.filter(c => c.tier === 'High');
    const mid = customerData.filter(c => c.tier === 'Mid');
    const low = customerData.filter(c => c.tier === 'Low');
    
    // Update counts
    document.getElementById('high-count').textContent = high.length;
    document.getElementById('mid-count').textContent = mid.length;
    document.getElementById('low-count').textContent = low.length;
    
    // Populate customer sections
    populateCustomers('high-customers', high);
    populateCustomers('mid-customers', mid);
    populateCustomers('low-customers', low);
    
    // Update summaries
    updateSummary('high-summary', high);
    updateSummary('mid-summary', mid);
    updateSummary('low-summary', low);
    
    // Make sure the low performers section icon is rotated since it starts expanded
    document.getElementById('low-icon').classList.add('rotated');
}

function populateCustomers(containerId, customers) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    customers.forEach(customer => {
        const card = document.createElement('div');
        card.className = 'customer-card';
        card.innerHTML = `
            <div class="customer-name">${customer.name}</div>
            <div class="customer-revenue">${formatCurrency(customer.revenue)}</div>
        `;
        container.appendChild(card);
    });
}

function updateSummary(summaryId, customers) {
    const summary = document.getElementById(summaryId);
    const totalRevenue = customers.reduce((sum, c) => sum + c.revenue, 0);
    const avgRevenue = totalRevenue / customers.length;
    
    summary.innerHTML = `
        <strong>Summary:</strong> ${customers.length} customers | 
        Total Revenue: ${formatCurrency(totalRevenue)} | 
        Average Revenue: ${formatCurrency(avgRevenue)}
    `;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

function toggleSection(tier) {
    const content = document.getElementById(`${tier}-content`);
    const icon = document.getElementById(`${tier}-icon`);
    
    if (content.classList.contains('expanded')) {
        content.classList.remove('expanded');
        icon.classList.remove('rotated');
    } else {
        content.classList.add('expanded');
        icon.classList.add('rotated');
    }
}

// Initialize on load
initializeDashboard();
