// src/data/productData.js
// Separated product data with expanded 3-4 line descriptions and optional specs.

const productData = {
  "Electrical and Electronics": {
    AFDD: [
      {
        name: "Standalone AFDD",
        price: "₹3500",
        img: "/product/Screenshot 2025-08-04 113141.png",
        description:
          "Compact standalone arc-fault detection device for small installations. Provides targeted arc detection to reduce fire risk in domestic circuits. Quick DIN-rail installation and simple reset. Ideal for retrofits and point-of-use protection.",
        specs: { mounting: "DIN-rail", ratedCurrent: "16–63 A", voltage: "230/240 V AC" }
      },
      {
        name: "Fixed AFDD + MCB/RCBO (integrated)",
        price: "₹79,000",
        img: "/product/chanan-cal9-40afd-rcbo-afdd.png",
        description:
          "Integrated AFDD with MCB/RCBO — robust protection for distribution boards. Combines arc-fault, overcurrent and residual-current protection in one compact unit. Saves panel space and simplifies wiring. Suited to residential and light-commercial boards.",
        specs: { tripTypes: "AFDD + RCBO + MCB", breakingCapacity: "6 kA", communication: "LED status" }
      },
      {
        name: "Mid-range Fixed AFDD/RCBO (OEM)",
        price: "₹80,000",
        img: "/product/Screenshot 2025-08-04 110017.png",
        description:
          "OEM mid-range integrated unit combining arc and residual-current protection. Engineered for nuisance-trip immunity and stable operation. Supports multiple current ratings and configurable trip curves. Good for small commercial multi-circuit panels.",
        specs: { ratedCurrent: "10–125 A", sensitivity: "30/100/300 mA options" }
      },
      {
        name: "Intelligent Slim AFDD (Siemens 5SV6)",
        price: "₹90,000",
        img: "/product/104487_2.webp",
        description:
          "Slim intelligent AFDD with diagnostics and status signalling for modern panels. Event logging, remote trip and health monitoring in a narrow housing. Ideal where space and diagnostics matter. BMS integration possible via gateway.",
        specs: { diagnostics: "Event log", width: "18 mm", integration: "BMS-ready" }
      }
    ],
    ACB: [
      {
        name: "Basic Fixed ACB (Magnetic Blowout)",
        price: "₹25,000",
        img: "/product/e78fd3be07dfd0eaad5a-1.webp",
        description:
          "Cost-effective fixed air circuit breaker for basic motor and feeder protection. Magnetic blowout design helps extinguish arcs economically. Built for simple distribution where ultra-high IFR isn't required. Low maintenance and easy mounting.",
        specs: { type: "Fixed", breakingCapacity: "up to 10 kA" }
      },
      {
        name: "Mid-range Fixed ACB (Air Chute / Blowout)",
        price: "₹40,000",
        img: "/product/3-pole-air-circuit-breaker-600nw-2516638801.webp",
        description:
          "Higher interrupting capacity with improved arc extinction for busy installations. Designed for industrial feeders with moderate short-circuit conditions. Robust mechanical construction for long duty cycles. Common upstream of MCCs.",
        specs: { poles: "3", breakingCapacity: "10–25 kA" }
      },
      {
        name: "Drawer-type with Basic Trip Unit",
        price: "₹100,000",
        img: "/product/Delixi-Air-Circuit-Breaker-External-labels-Rated-Current-and-Voltage-1kA-415V.webp",
        description:
          "Drawer-type ACB for easy maintenance and safe isolation. Withdrawable design allows tool-less servicing and secure lockout. Includes simple electronic trip functions and mechanical status indicators. Good for medium-voltage plantrooms.",
        specs: { type: "Draw-out", tripUnit: "Basic electronic" }
      },
      {
        name: "Intelligent Draw-out ACB (Emax₂ / 3WL)",
        price: "₹250,000",
        img: "/product/Types-of-Air-Circuit-Breakers.webp",
        description:
          "Advanced draw-out breaker with communication-ready trip unit and metering. Protection curves, metering and remote control via standard protocols. High breaking capacity for demanding commercial and industrial sites. Built for switchroom integration.",
        specs: { communication: "Modbus/Profibus optional", metering: "kW, kWh" }
      }
    ],
    "LED and Automation": [
      {
        name: "Round RGB LED Pool Light",
        price: "₹2800",
        img: "/product/71T30ny9yzL._UF894,1000_QL80_.jpg",
        description:
          "Compact RGB pool light with adjustable color scenes. IP68 rated for full submersion and long life. Low power draw with multiple preset scenes and soft fades. Perfect for residential pools and accent lighting.",
        specs: { power: "6–12 W", rating: "IP68" }
      },
      {
        name: "White LED Pool Light Module",
        price: "₹3000",
        img: "/product/61loNpZQpmL.jpg",
        description:
          "Bright white module designed for long-life pool illumination. High CRI and even distribution for safe night swimming. Corrosion-resistant housing with low maintenance. Works with niche housings and retrofit applications.",
        specs: { lumens: "800–1200 lm", life: "30,000+ hours" }
      },
      {
        name: "Premium Stainless-Steel Pool Fixture",
        price: "₹3500",
        img: "/product/pesteel.jpg",
        description:
          "Corrosion-resistant fixture for premium outdoor installations. Polished stainless finish resists chlorinated and salt environments. Robust mounting and tamper-proof fasteners for longevity. Ideal for high-end pools and waterfront sites.",
        specs: { material: "316 stainless steel", finish: "polished" }
      },
      {
        name: "RGB Fountain Lighting—Nozzle or Cluster Fixture",
        price: "₹3850",
        img: "/product/Image_38_b1568920-c56f-4a8a-983f-76b0fc3563ad_700x700.webp",
        description:
          "Cluster RGB lighting for decorative fountains and water features. Synchronized color scenes and DMX control options available. Low-voltage LED arrays for safe pool-side wiring. Use submerged or in nozzle housings for dynamic shows.",
        specs: { control: "DMX/RGBW app control", ingress: "IP68" }
      }
    ],
    "Control Panel": [
      {
        name: "Pentair EasyTouch / IntelliTouch",
        price: "₹65,000",
        img: "/product/1747330685998.png",
        description:
          "Pool automation controller with intuitive interface and presets. Manages pumps, heaters, lights and sanitisation schedules. Expandable modules allow multi-zone control and remote access. Favoured for reliability and integration.",
        specs: { integration: "Multiple protocols", zones: "Up to 6" }
      },
      {
        name: "Hayward OmniHub",
        price: "₹60,000",
        img: "/product/Screenshot 2025-08-04 133101.png",
        description:
          "Smart hub for connecting pool devices and remote control via app. Enables scheduling, alerts and scene automation from a phone. Works with pumps, chlorinators and lighting modules. Firmware updates via cloud.",
        specs: { app: "iOS/Android", connectivity: "Wi-Fi" }
      },
      {
        name: "Three-phase SS control panel",
        price: "₹11,500",
        img: "/product/Screenshot 2025-08-04 132828.png",
        description:
          "Heavy-duty 3-phase panel in stainless steel for plantrooms. Provides safe isolation, starter bays and easy maintenance access. Custom layouts to match pumps, heaters and filtration gear. Built for humid/corrosive environments.",
        specs: { material: "SS304/316 options", incoming: "3-phase" }
      },
      {
        name: "Modular smart panel with tablet interface",
        price: "₹50,000",
        img: "/product/pool-automation-systems-1080x675.jpg",
        description:
          "Modular control panel with an integrated tablet for local operation. Great for operators preferring tactile local interfaces and dashboards. Expandable I/O and remote connectivity for complex sites. Combines convenience with industrial reliability.",
        specs: { interface: "Integrated tablet", expandability: "Modular I/O" }
      }
    ],
    "Home Automation": [
      {
        name: "Wall-mounted Touch Control Panel",
        price: "₹25,000",
        img: "/product/Screenshot 2025-08-04 134054.png",
        description:
          "Sleek touch panel to control lights, HVAC and scenes. Flush-mounted design reduces clutter while complementing interiors. Supports scene presets, schedules and user profiles. Integrates with major smart ecosystems for voice control.",
        specs: { display: "7–10 inch", mount: "Flush" }
      },
      {
        name: "Central Touch Hub",
        price: "₹35,000",
        img: "/product/002.webp",
        description:
          "Central hub for automating devices across the home. Acts as the brain for schedules, scenes and bridging protocols. Supports Zigbee/Z-Wave/Wi-Fi depending on model. Easy setup with local automation options for privacy.",
        specs: { protocols: "Zigbee/Z-Wave/Wi-Fi" }
      },
      {
        name: "Wi-Fi Smart Switch Module (Retrofit)",
        price: "₹7,500",
        img: "/product/006.webp",
        description:
          "Retrofit module to convert traditional switches into smart ones. Fits behind existing plates and preserves manual control. Works over Wi-Fi for direct cloud and app integration. Low-power standby with OTA firmware support.",
        specs: { mounting: "Behind switch", comms: "Wi-Fi" }
      },
      {
        name: "DIY Smart Layout Dashboard",
        price: "₹40,000",
        img: "/product/Screenshot 2025-08-04 134741.png",
        description:
          "Customizable dashboard for monitoring and controlling multiple systems. Designed for integrators needing a single-pane view of sites. Supports widgets for power, temp, schedules and alerts. Delivered with templates that can be tailored per site.",
        specs: { customization: "High", deployment: "On-premise or cloud" }
      }
    ],
    "AI-Tools and Robots": [
      {
        name: "AIRROBO PC100",
        price: "₹55,000",
        img: "/product/wall_climbing_robotic_pool_cleaner_will_keep_your_summer_stress_fee_hero.jpg",
        description:
          "Robotic cleaner with wall-climbing capability for efficient cleaning. Climbs pool walls to clean tiles and the waterline thoroughly. Battery-backed operation and multi-mode cleaning cycles for flexibility. Low-maintenance with replaceable brushes and filters.",
        specs: { modes: "Auto/Spot/Edge", battery: "Li-ion 2–4 hr" }
      },
      {
        name: "WYBOT M2 & M2 Vision",
        price: "₹1L",
        img: "/product/1_ab15989a-10a4-478b-aa02-a652ba960935.webp",
        description:
          "Vision-enabled robot for precision maintenance tasks. Runs inspection routines and records visual logs for condition monitoring. Suitable for asset inspection and tight-space diagnostics. Often paired with analytics for predictive maintenance.",
        specs: { vision: "HD camera", useCases: "Inspection/maintenance" }
      },
      {
        name: "Beatbot AquaSense 2 Ultra (HybridSense AI) iGarden K Series (AI-Inverter Tech)",
        price: "₹1.8L",
        img: "/product/Cordless_Robotic_Pool_Cleaner_14.jpg",
        description:
          "High-end hybrid robot with adaptive AI cleaning profiles. Learns pool geometry and optimises cleaning paths for speed and coverage. Energy-efficient inverter drive and premium filters for commercial use. Remote diagnostics enable serviceability.",
        specs: { ai: "Adaptive pathing", filters: "High-capacity" }
      },
      {
        name: "iGarden K Series (AI-Inverter Tech)",
        price: "₹90,000",
        img: "/product/WechatIMG1127.webp",
        description:
          "Energy-efficient AI inverter system for smart gardening and pools. Regulates pump speed to match duty cycles and save energy. Integrates with environmental sensors for adaptive operation. A smart choice where running cost reduction matters.",
        specs: { efficiency: "Inverter-driven", integration: "Sensor-ready" }
      }
    ],
    "Industrial Switchgear": [
      {
        name: "Low-Voltage Switchgear (≤1kV)",
        price: "₹6000/Section",
        img: "/product/comprehensive-aerial-view-highly-organized-industrial-electrical-switchgear-room-exemplifying-robust-power-perspective-368842824.webp",
        description:
          "Modular LV switchgear sections for distribution and control. Configurable with breakers, meters and isolators per project. Engineered for safe access, segregation and low maintenance. Commonly used in commercial buildings and small industrial plants.",
        specs: { ratedVoltage: "≤1 kV", modular: true }
      },
      {
        name: "Medium-Voltage Air-Insulated Switchgear (MV-AIS, 3.3–24 kV)",
        price: "₹2.8L/Unit",
        img: "/product/dreamstime_m_38398271-1024x683.jpg.webp",
        description:
          "MV AIS units suitable for commercial and industrial sites. Air-insulated compartments reduce maintenance compared to oil gear. Designed for medium-voltage feeders with safety interlocks and earthing. Supplied standalone or skid-mounted.",
        specs: { voltageRange: "3.3–24 kV", insulation: "Air" }
      },
      {
        name: "Metal-Clad Switchgear (MV, with compartments)",
        price: "₹5L/Bay",
        img: "/product/J100CLAD-AIS-Switchgear-cropped.png",
        description:
          "Compartmentalized metal-clad bays for enhanced safety and segregation. Each bay isolates cable, bus and breaker compartments to limit fault propagation. Robust construction for long service life in industry. Specified where safety and maintainability matter most.",
        specs: { bayType: "Metal-clad", protection: "Compartmentalized" }
      }
    ]
  },

  "Fluid Technologies": {
    "Swimming Pool": [
      {
        name: "Astral ABS Swimming Pool Filtration Equipment, For Commercial, Flow Rate: 22m3",
        price: "₹12,000/piece",
        img: "/product/Screenshot 2025-08-05 101456.png",
        description:
          "Commercial-grade filtration equipment for medium-sized pools. Robust ABS body resists corrosion and simplifies servicing. Designed for continuous operation and easy media replacement. Pairs well with multi-speed pumps and automated backwash systems.",
        specs: { flowRate: "22 m³/h", material: "ABS" }
      },
      {
        name: "Plastic Black Swimming Pool Motor Pump, For Commercial",
        price: "₹38,500",
        img: "/product/Screenshot 2025-08-05 101903.png",
        description:
          "Durable motor pump suited for continuous operation. Sealed bearings and thermal protection for extended life. Available in multiple power ratings to match filtration needs. Compatible with standard flanges for straightforward retrofits.",
        specs: { type: "Centrifugal", mounts: "Flanged/NPT options" }
      },
      {
        name: "Astral Cast Iron Swimming Pool Water Heater",
        price: "ask price",
        img: "/product/Screenshot 2025-08-05 102221.png",
        description:
          "Heavy-duty cast iron heater — enquire for capacity-based pricing. Durable construction ideal for long-term heat transfer. Available in several kW outputs to suit pool volumes. Certified installation advised for safety and warranty.",
        specs: { material: "Cast iron", outputs: "Various kW" }
      },
      {
        name: "Warm White Pool Wall Mount Stainless Steel Light, For Catch Floating Debris",
        price: "₹2,500/piece",
        img: "/product/Screenshot 2025-08-05 103840.png",
        description:
          "Wall-mount light offering practical illumination for maintenance. Warm white tone improves visibility without harsh glare. Stainless housing resists corrosion in humid plantrooms. Useful for service areas and pool entry points.",
        specs: { colorTemp: "3000 K", material: "Stainless steel" }
      },
      {
        name: "Blue Automatic Swimming Pool Cleaner",
        price: "₹1.8L/piece",
        img: "/product/Screenshot 2025-08-05 104151.png",
        description:
          "Automatic cleaner with efficient debris pickup and filtration. Multiple brush modes tackle algae, sand and organic debris. Simple maintenance with washable filters and accessible internals. Fits mid-sized private or small commercial pools.",
        specs: { type: "Robotic", runTime: "Up to 2.5 hr" }
      },
      {
        name: "AstralPool Micro pH & Micro Rx COntrol Panel",
        price: "₹75,000",
        img: "/product/regulation-board-astrapool-chlorine-ph.jpg",
        description:
          "pH and chemical dosing controller for balanced water chemistry. Automated dosing reduces manual handling and improves water quality. Includes sensors, pumps and dosing outputs for precision. Essential for commercial sites requiring health compliance.",
        specs: { control: "pH/ORP dosing", outputs: "2 dosing pumps" }
      },
      {
        name: "Blue PVC Swimming Pool Cover",
        price: "₹85/sqft",
        img: "/product/Screenshot 2025-08-05 113857.png",
        description:
          "UV-stable PVC cover to reduce evaporation and heat loss. Lightweight yet durable for seasonal or daily use. Helps keep leaves and debris out and reduces chemical consumption. Available cut-to-size for bespoke pools.",
        specs: { material: "UV-stable PVC", application: "Covers" }
      },
      {
        name: "Stainless Steel Silver Swimming Pool Ladders, For Domestic",
        price: "₹22,500/piece",
        img: "/product/Screenshot 2025-08-05 114146.png",
        description:
          "Chromed stainless ladder built for comfortable entry/exit. Ergonomic treads and handrails for safe use by all ages. 316-grade options available for salt-water pools and coastal sites. Robust fixings supplied for secure mounting.",
        specs: { material: "316 stainless", heights: "Standard 3-step" }
      },
      {
        name: "Commercial Sand Filter",
        price: "₹32,200/piece",
        img: "/product/Screenshot 2025-08-06 104449.png",
        description:
          "High-flow sand filter for commercial filtration needs. Engineered for long cycles between backwashes and easy media replacement. Available flange sizes to match commercial pumps and pipework. Durable construction for constant operation.",
        specs: { flowRate: "various", media: "Silica sand" }
      },
      {
        name: "Electric Pool Pump",
        price: "₹1.49L/piece",
        img: "/product/Screenshot 2025-08-06 124427.png",
        description:
          "Energy-efficient pump for reliable circulation and filtration. Available in single-speed and variable-speed inverter options. Sealed motor with thermal protection for long duty. Select pump sizing based on pool turnover requirements.",
        specs: { types: "Single/Variable speed", inlet: "Various" }
      },
      {
        name: "Heat Pump",
        price: "₹25000",
        img: "/product/Screenshot 2025-08-11 131224.png",
        description:
          "Swimming Pool Heat Pumps are high capacity heating systems that can raise the temperature of the swimming pool water from ambient to a set temperature (27 ~ 35°C) and maintain the temperature. These heat pumps find their application in swimming pools in clubs, resorts and bungalows.",
        specs: { "Heating Capacity": "24.0", COP: "5.3", "power supply":"38V/3N/5Hz", "Input Power":"4.62" , "Input Current" :"7.0"}
      },
      {
        name: "Pool Skimmer",
        price: "₹32,200/piece",
        img: "/product/Screenshot 2025-08-06 130118.png",
        description:
          "Surface skimmer to collect floating debris and leaves. Flow-balanced design improves surface turnover and cleanliness. Easy-access baskets make maintenance quick and hygienic. Compatible with both new builds and retrofits.",
        specs: { basket: "Removable", material: "UV-stable plastic" }
      }
    ],

    "Fountain Technology": [
      {
        name: "Finger Jet Fountain Nozzle",
        price: "₹40,000/piece",
        img: "/product/Screenshot 2025-08-05 122834.png",
        description:
          "Precision nozzle for thin laminar jet fountain effects. Produces uninterrupted glass-like streams ideal for architectural features. Requires accurate pressure and alignment for best results. Often used in reflecting pools and water walls.",
        specs: { effect: "Laminar", material: "Brass/SS options" }
      },
      {
        name: "1/2 inch (Dia) Brass Rain Dance Fountain Nozzle, Pipe Size: 1 inch",
        price: "₹4,500/piece",
        img: "/product/Screenshot 2025-08-05 123117.png",
        description:
          "Durable brass nozzle for rain-style fountain patterns. Easy to maintain and resistant to mineral buildup with regular flushing. Perfect for medium-scale choreographed fountain sequences. Pairs well with RGB lighting for night shows.",
        specs: { material: "Brass", pattern: "Rain" }
      },
      {
        name: "13inch Black Aqua Geyser Jet Fountain Nozzle, 165 Rpm, 14mm",
        price: "₹900/piece",
        img: "/product/Screenshot 2025-08-05 123339.png",
        description:
          "Compact geyser nozzle with high-speed rotation for dramatic jets. Suitable for playful water features and themed attractions. Balanced impeller reduces vibration and noise. Low-cost option for dynamic fountain installations.",
        specs: { rpm: "165", size: "13 inch" }
      },
      {
        name: "Brass Foam Jet Fountain Nozzle, Size: 1 inch",
        price: "₹1,850/piece",
        img: "/product/Screenshot 2025-08-05 123606.png",
        description:
          "Produces voluminous frothy foam effects for theatrical displays. Brass construction ensures longevity with routine maintenance. Use with aeration systems for fuller foam. Ideal in themed landscapes and theatrical water features.",
        specs: { effect: "Foam", material: "Brass" }
      },
      {
        name: "100 W Swimming Pool LED Fountain Light",
        price: "₹4,500/piece",
        img: "/product/Screenshot 2025-08-05 125136.png",
        description:
          "High-power LED for large fountain illumination. Lights big jets and wide plunge pools with even coverage. IP68-rated driver and housing for submerged use. Often specified for public displays and large commercial projects.",
        specs: { power: "100 W", ingress: "IP68" }
      },
      {
        name: "12 W premium stainless RGB fountain light",
        price: "₹3,000",
        img: "/product/RGBSubmersiblePondLightswithBluetoothApp_6lights.webp",
        description:
          "Compact RGB light with app control for color scenes. Stainless housing suitable for salt or chlorinated environments. Bluetooth or DMX control options provide flexible designer control. Perfect for accenting smaller fountain elements.",
        specs: { power: "12 W", control: "App/DMX optional" }
      },
      {
        name: "3 LED Crystal RGB light",
        price: "₹3,500",
        img: "/product/phyfalip-fountain-accessories-sa1126627g-44_600.avif",
        description:
          "Crystal-style RGB cluster for decorative lighting effects. Creates prismatic sparkle suited to feature landscaping. Small form factor fits tight housings and nozzle clusters. Ideal for ornamental ponds and hospitality settings.",
        specs: { leds: 3, mounting: "Cluster" }
      },
      {
        name: "4W PVC LED Fountain Light, Electric",
        price: "₹4,000/piece",
        img: "/product/Screenshot 2025-08-05 124759.png",
        description:
          "Small PVC-mounted LED for tight fountain housings. Low power draw and compact size simplify installation in ensembles. Economical choice for accent lighting where many fixtures are needed. Suitable for DIY and light commercial projects.",
        specs: { power: "4 W", housing: "PVC" }
      },
      {
        name: "Domestic Outdoor Fountain Pump",
        price: "₹2,100",
        img: "/product/71rq9JP+NmL._UF894,1000_QL80_.jpg",
        description:
          "Economical pump for small decorative fountains. Quiet operation and splash-protected motor for residential use. Compact footprint eases installation in small basins and planters. Energy-efficient choices help limit running costs.",
        specs: { power: "20–80 W", application: "Domestic" }
      },
      {
        name: "Statuary / Feature Fountain Pump",
        price: "₹12,000",
        img: "/product/water-fountain-pumps.webp",
        description:
          "Higher-flow pump for medium-sized features. Built for sustained running with robust bearings and seals. Multiple flow/nozzle adapters included for flexible use. Recommended for garden features, courtyards and plazas.",
        specs: { flowRate: "various", seals: "Mechanical seal" }
      },
      {
        name: "Ultrasonic Mist Maker (Small fountains, DIY use)",
        price: "₹3,500",
        img: "/product/61cNjm0HCHL._UF894,1000_QL80_.jpg",
        description:
          "Creates fine mist effects for atmospheric features. Low-voltage and compact, perfect for tabletop or small pond use. Produces haze that enhances lighting and soundscapes. Easy to install and inexpensive to run.",
        specs: { power: "12–24 V", application: "Mist effect" }
      }
    ],

    "Irrigation": [
      {
        name: "rass Automatic Pop Up Sprinklers For Irrigation, For Agricultural",
        price: "₹198/piece",
        img: "/product/Screenshot 2025-08-05 153457.png",
        description:
          "Reliable pop-up sprinklers for agricultural and landscape use. Durable construction for exposed conditions and long life. Adjustable spray patterns provide flexible coverage and efficiency. Suitable for turf, large beds and light agriculture.",
        specs: { sprayRadius: "various", pressureRange: "1–4 bar" }
      },
      {
        name: "Shrub Style Fine Sprinkler System",
        price: "₹750/piece",
        img: "/product/Screenshot 2025-08-05 154754.png",
        description:
          "Low-profile sprinkler for shrubs and borders. Delivers gentle coverage to avoid soil erosion and plant damage. Easily hidden beneath mulch and canopy for aesthetics. Works with drip and micro-spray systems in mixed landscapes.",
        specs: { type: "Micro-spray", application: "Shrub beds" }
      },
      {
        name: "Pop-up spray head",
        price: "₹600",
        img: "/product/blacks-rain-bird-emitters-xpopsq-1sx-4f_600.avif",
        description:
          "Standard spray head for even coverage in lawns. Quiet operation and clog resistance with filtered water. Adjustable nozzles let designers tune throw and pattern. A staple component for professional landscape irrigation.",
        specs: { flow: "various", nozzleTypes: "Adjustable" }
      },
      {
        name: "Online Drippers",
        price: "₹30/meter",
        img: "/product/Screenshot 2025-08-05 160734.png",
        description:
          "Dripline for precise water delivery and efficiency. Uniform flow emitters reduce waste and prevent overwatering. Excellent for hedges, planters and intensive landscape zones. Simple to cut-to-length and install onsite.",
        specs: { spacing: "10–60 cm", flowRate: "L/h per emitter" }
      },
      {
        name: "Irrigation Valve Box",
        price: "₹600",
        img: "/product/Screenshot 2025-08-07 110606.png",
        description:
          "Protective box for solenoids and valve assemblies. Keeps valves accessible while shielding from weather and mechanical damage. Multiple knockouts accommodate wiring and piping. A practical item for tidy, serviceable irrigation installs.",
        specs: { material: "Plastic", sizes: "Multiple" }
      },
      {
        name: "Landscape Irrigation Dripline",
        price: "₹100/meter",
        img: "/product/Screenshot 2025-08-07 110027.png",
        description:
          "UV-stable dripline for long-life landscape irrigation. Resists clogging and provides predictable output over seasons. Ideal for gardens, planters and perimeter planting schemes. Easy to install with standard fittings.",
        specs: { uvStable: true, flowOptions: "various" }
      },
      {
        name: "3/4 inch Brass Solenoid Valve 220 Volts AC for Water/air/Oil/Gas",
        price: "₹1,350",
        img: "/product/Screenshot 2025-08-07 113215.png",
        description:
          "Brass solenoid valve for reliable automated control. Versatile in media compatibility: water, air and some oils. Fast actuation and easy wiring for irrigation and process control. Threaded connections simplify replacement and service.",
        specs: { voltage: "220 VAC", size: "3/4 inch" }
      },
      {
        name: "Agromato (Aqualin) Mini Rain Sensor (Rain Sensor)",
        price: "₹1,777",
        img: "/product/Screenshot 2025-08-07 113418.png",
        description:
          "Weather sensor to halt irrigation during rain events. Saves water and prevents overwatering by integrating with controllers. Small footprint for easy mounting on eaves or poles. Simple wiring and reliable switching for automated systems.",
        specs: { type: "Rain sensor", mount: "Eaves/pole" }
      }
    ],

    "Tiles": [
      {
        name: "Sophy White",
        price: "Ask Price",
        img: "/product/Screenshot 2025-08-05 162503.png",
        description:
          "Glossy white tile suitable for pool surrounds and interiors. Reflective surface enhances water appearance and brightness. Slip-rated finishes available for wet-area safety. Custom sizes and trims available on request."
      },
      {
        name: "ColarBlue",
        price: "Ask Price",
        img: "/product/Screenshot 2025-08-05 162613.png",
        description:
          "Ceramic blue tile for decorative water-facing surfaces. Rich tone delivers a classic aquatic look for pools and spas. Durable glaze and UV resistance keep colour vibrant outdoors. Suitable for mosaics and accents."
      },
      {
        name: "SerenaMix",
        price: "Ask Price",
        img: "/product/Screenshot 2025-08-05 162703.png",
        description:
          "Mixed-tone tile for textured visual finishes. Adds depth and variation to feature walls and pool pans. Available in matte or gloss finishes to suit design intent. Often used to create artisan or handcrafted looks."
      },
      {
        name: "Pietro Golden",
        price: "Ask Price",
        img: "/product/Screenshot 2025-08-05 162738.png",
        description:
          "Warm golden tile for premium installations. Luxurious tone pairable with stone and timber palettes. Durable, colour-fast glazes ensure long-term aesthetics. Favoured for hotel and hospitality projects."
      },
      {
        name: "Mistery Sand",
        price: "Ask Price",
        img: "/product/Screenshot 2025-08-05 162844.png",
        description:
          "Sandy-hue tile for naturalistic palettes. Blends with beach-themed landscaping and coping. Textured surfaces available for anti-slip performance. Great for leisure pools and naturalistic features."
      },
      {
        name: "AlmaHoney",
        price: "Ask Price",
        img: "/product/Screenshot 2025-08-05 162907.png",
        description:
          "Honey-toned tile with subtle veining. Adds warmth and inviting character to pool areas. Available in large-format slabs for fewer grout lines. Pairs beautifully with timber decking and warm metals."
      },
      {
        name: "StelaGolden",
        price: "Ask Price",
        img: "/product/Screenshot 2025-08-05 162936.png",
        description:
          "Premium gold-tinged tile for statement finishes. Creates focal accents around water features and entrances. Handle carefully during installation to maintain consistent sheen. Designer choice for high-end schemes."
      }
    ],

    "Lake Management": [
      {
        name: "Airmax Shallow Water Series SW40",
        price: "₹1.27L",
        img: "/product/Screenshot 2025-08-07 095852.png",
        description:
          "Shallow-water aerator for small lakes and ponds. Improves dissolved oxygen and reduces stagnation in littoral zones. Lightweight and easy to deploy from shore or floating platforms. Low-maintenance and energy efficient.",
        specs: { power: "40 W", application: "Shallow ponds" }
      },
      {
        name: "North Star Floating Pond Aerator (Fountain Style)",
        price: "₹1.5L",
        img: "/product/Screenshot 2025-08-07 100723.png",
        description:
          "Floating aerator that doubles as a fountain for decorative aeration. Enhances aesthetics while promoting oxygen exchange. Designed for small to medium ornamental lakes and reservoirs. Durable floats and corrosion-resistant materials.",
        specs: { power: "Varies", style: "Fountain" }
      },
      {
        name: "Kasco 2 HP Surface Aerator",
        price: "₹3L",
        img: "/product/Screenshot 2025-08-07 100958.png",
        description:
          "High-capacity surface aerator for oxygenation of large waterbodies. Powerful mixing action brings oxygen into the water column. Heavy-duty construction for continuous operation in commercial settings. Used in fisheries and recreational lakes.",
        specs: { power: "2 HP", application: "Large ponds/lakes" }
      },
      {
        name: "AirLift 2XL Lake Aeration System",
        price: "₹2.5L",
        img: "/product/Screenshot 2025-08-07 102145.png",
        description:
          "Powerful aeration system for medium-sized lakes. Compresses air and lifts bubbles through diffusers for deep mixing. Improves ecosystem health and reduces algal blooms. Engineered for longevity with serviceable compressors.",
        specs: { capacity: "2 XL model", method: "Airlift" }
      },
      {
        name: "SRR Aqua Suppliers 6-Paddle Aerator (2.5 HP)",
        price: "₹47,000/unit",
        img: "/product/Screenshot 2025-08-07 102955.png",
        description:
          "Durable paddle aerator for continuous pond maintenance. Six paddles provide vigorous surface agitation and oxygen transfer. Simple mounting and reliable motors simplify upkeep. Cost-effective for farm ponds and small reservoirs.",
        specs: { power: "2.5 HP", paddles: 6 }
      },
      {
        name: "AirStream Pro Jet Aerator",
        price: "₹3L",
        img: "/product/Screenshot 2025-08-07 103419.png",
        description:
          "Jet-style aerator for deep-water mixing. High-velocity jet entrains surface water to increase circulation depth. Used where stratification control and turnover are needed. Suitable for larger lakes and industrial waterbodies.",
        specs: { method: "Jet", application: "Deep mixing" }
      },
      {
        name: "Filtral UVC",
        price: "₹8,504",
        img: "/product/Screenshot 2025-08-08 130610.png",
        description:
          "UVC clarifier to reduce algae and improve clarity. Inline or external installation options for flexible retrofits. Effective at controlling free-floating algae and some pathogens. Low-maintenance lamp changes and simple housings.",
        specs: { uvPower: "Varies", use: "Clarity improvement" }
      }
    ],

    EPDM: [
      {
        name: "EPDM",
        price: "₹499/square meter",
        img: "/product/Screenshot 2025-08-08 105137.png",
        description:
          "Durable EPDM rubber membrane for lining and waterproofing. Flexible across temperature ranges and resistant to UV and ozone. Common choice for ponds, water features and liners. Easy to seam and repair with standard adhesives.",
        specs: { thickness: "1.0–2.0 mm typical", material: "EPDM" }
      }
    ],

    "Landscape Provider": [
      {
        name: "Landscape Irrigation Dripline",
        price: "₹100/meter",
        img: "/product/Screenshot 2025-08-07 110027.png",
        description:
          "Dripline for efficient watering of landscaped areas. Designed for uniform emitter spacing and low-pressure operation. Long-life UV-stable construction reduces maintenance. Great for planting beds and urban planting schemes.",
        specs: { application: "Landscape", uvStable: true }
      },
      {
        name: "Irrigation Valve Box",
        price: "₹600",
        img: "/product/Screenshot 2025-08-07 110606.png",
        description:
          "Protective housing for valves and controllers. Keeps gear tidy and accessible while shielding from elements. Multiple sizes and knockouts for flexible layouts on site. A small but essential item for professional installs.",
        specs: { material: "Plastic", sizes: "Multiple" }
      },
      {
        name: "General Weed Barrier Roll",
        price: "₹1,800",
        img: "/product/Screenshot 2025-08-07 111416.png",
        description:
          "Geotextile roll to suppress weed growth in landscape beds. Permeable to water and air while blocking light to weeds. Durable for multi-year service under mulch or stone. Cost-effective for low-maintenance landscaping.",
        specs: { material: "Geotextile", width: "various" }
      }
    ]
  },

  Constructions: {
    "Civil Constructions": [
      {
        name: "Cement and Concrete",
        price: "₹350/bag",
        img: "/product/Screenshot 2025-08-08 094517.png",
        description:
          "General-purpose cement for structural and non-structural work. Consistent mix properties for predictable curing and strength. Suitable for foundations, screeds and cast-in-place concrete. Available in bulk pricing for large projects."
      },
      {
        name: "Concrete Bricks",
        price: "₹7/Brick",
        img: "/product/Screenshot 2025-08-08 094829.png",
        description:
          "High-strength concrete bricks for walls and paving. Manufactured to tolerances for fast modular building. Good thermal mass for passive temperature control in buildings. Ideal for loadbearing and infill masonry."
      },
      {
        name: "Steel TMT Bars",
        price: "₹55,000/ton",
        img: "/product/Screenshot 2025-08-08 100111.png",
        description:
          "Thermo mechanically treated bars for reinforced concrete. High yield strength with ductility for seismic zones. Supplied in standard grades and cut-to-length options. Widely used across structural applications."
      },
      {
        name: "Blue Metal / Gravel)",
        price: "₹600/ton",
        img: "/product/Screenshot 2025-08-08 100337.png",
        description:
          "Crushed stone aggregate for concrete and roadworks. Well-graded material improves concrete packing and reduces voids. Sourced locally where possible to reduce transport costs. Also used as base material for pavements and drainage."
      },
      {
        name: "Clay Bricks",
        price: "₹10/Brick",
        img: "/product/Screenshot 2025-08-08 100557.png",
        description:
          "Traditional fired clay bricks for masonry. Good thermal insulation and proven longevity. Available in multiple profiles and face finishes. An aesthetic choice for exposed masonry and vernacular designs."
      },
      {
        name: "Sand",
        price: "₹5,000/ 100 CFT",
        img: "/product/Screenshot 2025-08-08 103233.png",
        description:
          "Washed sand for plastering and concrete mixes. Consistent grading reduces shrinkage and cracking risk. Available in bulk for construction sites and ready-mix plants. Quality-tested to meet common standards."
      }
    ],

    "Building Materials": [
      {
        name: "Water Tank(1000L)",
        price: "₹5,000",
        img: "/product/Screenshot 2025-08-08 104027.png",
        description:
          "Polyethylene tank for potable and utility water storage. UV-stabilised material resists degradation in sunlight. Multiple inlet/outlet points for plumbing flexibility. Lightweight for rooftop or plinth placement."
      },
      {
        name: "Wires",
        price: "₹500/coil",
        img: "/product/Screenshot 2025-08-08 101413.png",
        description:
          "PVC-insulated copper conductor wires for installations. Available in multiple gauges to match circuit requirements. Manufactured to electrical safety standards for consistent performance. Suitable for lighting, power and control circuits."
      },
      {
        name: "Pipes",
        price: "₹300/meter",
        img: "/product/Screenshot 2025-08-08 101604.png",
        description:
          "PVC and CPVC pipes for plumbing and drainage. Chemical-resistant options for hot-water use. Supplied in standard lengths for ease of installation. Fittings and solvent cements available for a complete system."
      },
      {
        name: "Switches",
        price: "₹300",
        img: "/product/Screenshot 2025-08-08 101742.png",
        description:
          "Standard wall switches and plates for interiors. Multiple styles from rocker to designer toggles. Durable contacts ensure long mechanical life and low noise. Compatible with retrofit and new-build installations."
      },
      {
        name: "Taps",
        price: "₹500",
        img: "/product/Screenshot 2025-08-08 102411.png",
        description:
          "Brass-plated taps with ceramic cartridges. Smooth operation and leak-resistant cartridges for reduced maintenance. Finish options available to match sanitaryware. Suitable for kitchens, bathrooms and utility areas."
      },
      {
        name: "LED Lights",
        price: "₹500",
        img: "/product/Screenshot 2025-08-08 104312.png",
        description:
          "Energy-saving LED fixtures for general lighting. Long life and high luminous efficacy reduce operating costs. Multiple form factors for downlights, panels and outdoor fittings. Available with dimming and colour temperature options."
      },
      {
        name: "CP Fittings",
        price: "₹1,200",
        img: "/product/Screenshot 2025-08-08 104436.png",
        description:
          "Chrome-plated plumbing fittings for durability. Polished finish resists tarnish and pairs well with modern fixtures. Threaded and compression options for various connections. A dependable choice for long-term installations."
      },
      {
        name: "Smoke Detectors",
        price: "₹700",
        img: "/product/Screenshot 2025-08-08 104455.png",
        description:
          "Stand-alone smoke detectors for early fire warning. Battery-backed and mains-powered options available. Hush/test buttons and replaceable batteries for convenience. Install per local code and recommended coverage patterns."
      }
    ],

    "Design and consultancy": [
      {
        id: 1,
        name: "Architectural Design",
        description: "Floor plans, elevations, 3D renderings, and site layouts to visualize your project.",
        img: "https://res.cloudinary.com/dfzliqupz/image/upload/v1754117762/Screenshot_2025-07-19_233358_f1tiqx.png",
        price: "Depends on project size"
      },
      {
        id: 2,
        name: "Structural Design",
        description: "Structural drawings, load analysis, and reinforcement detailing for safe construction.",
        img: "/product/Screenshot 2025-08-08 111540.png",
        price: "Depends on complexity"
      },
      {
        id: 3,
        name: "Landscape Design",
        description: "Garden layouts, outdoor planning, and irrigation system designs.",
        img: "/product/Screenshot 2025-08-08 111731.png",
        price: "Depends on area"
      },
      {
        id: 4,
        name: "Consultancy Services",
        description: "Cost estimation, material selection, compliance, and sustainability advice.",
        img: "/product/Screenshot 2025-08-08 111910.png",
        price: "₹1,000 – ₹5,000 per consultation"
      }
    ]
  }
};

export default productData;
