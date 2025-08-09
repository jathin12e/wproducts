// topProducts.js
const topProducts = {
  "Electrical and Electronics": [
    {
      name: "Mid-range Fixed AFDD/RCBO (OEM)",
      price: "₹80,000",
      img: "/product/Screenshot 2025-08-04 110017.png",
      description: "OEM integrated AFDD + RCBO for robust arc and residual-current protection. Compact, reliable, and ideal for distribution panels.",
      specs: {
        "Rated Current": "100A",
        "Voltage": "240/415V AC",
        "Type": "AFDD + RCBO",
        "Mounting": "Fixed",
        "Compliance": "IEC 61008, IEC 62606"
      }
    },
    {
      name: "Drawer-type with Basic Trip Unit",
      price: "₹1,00,000",
      img: "/product/Delixi-Air-Circuit-Breaker-External-labels-Rated-Current-and-Voltage-1kA-415V.webp",
      description: "Draw-out air circuit breaker with basic trip unit for cost-effective protection. Easy maintenance and quick replacement.",
      specs: {
        "Rated Current": "630A–4000A",
        "Voltage": "415V AC",
        "Trip Unit": "Basic Electronic",
        "Mounting": "Draw-out",
        "Breaking Capacity": "50kA"
      }
    },
    {
      name: "RGB Fountain Lighting—Nozzle or Cluster Fixture",
      price: "₹3,850",
      img: "/product/Image_38_b1568920-c56f-4a8a-983f-76b0fc3563ad_700x700.webp",
      description: "IP68-rated RGB lighting fixture for fountains. Delivers vivid, app-controlled color effects for night displays.",
      specs: {
        "Material": "SS304 / ABS",
        "IP Rating": "IP68",
        "Light Source": "RGB LED",
        "Control": "DMX / App",
        "Power": "12–24V DC"
      }
    },
    {
      name: "Pentair EasyTouch / IntelliTouch",
      price: "₹65,000",
      img: "/product/1747330685998.png",
      description: "Pool automation system with preset programs and remote control. Supports lighting, pumps, and heating.",
      specs: {
        "Control Type": "Touchscreen",
        "Connectivity": "Wired / Wireless",
        "Zones": "Up to 8",
        "Features": "Scheduling, remote monitoring",
        "Power": "110/230V AC"
      }
    },
    {
      name: "Wall-mounted Touch Control Panel",
      price: "₹25,000",
      img: "/product/Screenshot 2025-08-04 134054.png",
      description: "Slim, wall-mounted touch control for home or pool automation. Intuitive and stylish interface.",
      specs: {
        "Display": "Capacitive Touch",
        "Resolution": "800x480",
        "Connectivity": "Wi-Fi / RS485",
        "Mounting": "Wall",
        "Power": "24V DC"
      }
    },
    {
      name: "Beatbot AquaSense 2 Ultra (HybridSense AI)",
      price: "₹1.8L",
      img: "/product/Cordless_Robotic_Pool_Cleaner_14.jpg",
      description: "AI-powered robotic pool cleaner with advanced navigation and powerful filtration. Cordless for ease of use.",
      specs: {
        "Cleaning Mode": "Floor, Wall, Waterline",
        "Battery Life": "3–4 hours",
        "Charging Time": "2–3 hours",
        "Filtration": "Dual-layer",
        "Navigation": "HybridSense AI"
      }
    }
  ],

  "Fluid Technologies": [
    {
      name: "Electric Pool Pump",
      price: "₹1.49L/piece",
      img: "/product/Screenshot 2025-08-06 124427.png",
      description: "Energy-efficient pool circulation pump. Variable speed for lower energy use and quieter operation.",
      specs: {
        "Flow Rate": "20–30 m³/h",
        "Power": "1.5–3 HP",
        "Speed Control": "Variable",
        "Material": "Fiberglass-reinforced",
        "Voltage": "220–240V"
      }
    },
    {
      name: "Finger Jet Fountain Nozzle",
      price: "₹40,000/piece",
      img: "/product/Screenshot 2025-08-05 122834.png",
      description: "Precision fountain nozzle creating laminar finger jet effects. Suitable for decorative water features.",
      specs: {
        "Material": "Brass / SS304",
        "Spray Height": "1–3m",
        "Connection": "1–2 inch BSP",
        "Water Flow": "20–60 L/min",
        "Finish": "Polished"
      }
    },
    {
      name: "Brass Automatic Pop Up Sprinklers",
      price: "₹198/piece",
      img: "/product/Screenshot 2025-08-05 153457.png",
      description: "Commercial-grade brass sprinkler head with adjustable spray pattern. Long service life.",
      specs: {
        "Material": "Brass",
        "Pop-up Height": "2–4 inch",
        "Spray Range": "3–12m",
        "Inlet Size": "1/2 inch",
        "Pressure": "2–4 bar"
      }
    },
    {
      name: "Pietro Golden",
      price: "Ask Price",
      img: "/product/Screenshot 2025-08-05 162738.png",
      description: "Premium golden ceramic tile for luxury spaces. Durable and water-resistant finish.",
      specs: {
        "Material": "Ceramic",
        "Finish": "Glossy Golden",
        "Size": "600x600 mm",
        "Water Absorption": "<0.5%",
        "Application": "Floor/Wall"
      }
    },
    {
      name: "Airmax Shallow Water Series SW40",
      price: "₹1.27L",
      img: "/product/Screenshot 2025-08-07 095852.png",
      description: "Aerator for small ponds and lakes. Boosts oxygen levels for aquatic health.",
      specs: {
        "Motor Power": "1 HP",
        "Airflow": "2.5 CFM",
        "Coverage": "Up to 1 acre",
        "Voltage": "230V",
        "Cable Length": "15m"
      }
    },
    {
      name: "EPDM",
      price: "₹499/sq.m",
      img: "/product/Screenshot 2025-08-08 105137.png",
      description: "Flexible EPDM liner for ponds and pools. UV and weather-resistant for long life.",
      specs: {
        "Material": "EPDM Rubber",
        "Thickness": "1 mm",
        "Width": "3–6 m",
        "UV Resistance": "Yes",
        "Temperature Range": "-40°C to 120°C"
      }
    }
  ],

  Constructions: [
    {
      name: "Concrete Bricks",
      price: "₹7/Brick",
      img: "/product/Screenshot 2025-08-08 094829.png",
      description: "Strong concrete bricks for walls and paving. Economical and durable choice.",
      specs: {
        "Size": "190x90x90 mm",
        "Strength": "5–7 MPa",
        "Material": "Cement + Aggregate",
        "Weight": "3–3.5 kg",
        "Water Absorption": "<10%"
      }
    },
    {
      name: "Pipes",
      price: "₹300/meter",
      img: "/product/Screenshot 2025-08-08 101604.png",
      description: "PVC/CPVC pipes for plumbing. Corrosion-resistant with long service life.",
      specs: {
        "Material": "PVC / CPVC",
        "Diameter": "20–110 mm",
        "Pressure Rating": "PN10–PN16",
        "Length": "3–6 m",
        "Color": "White / Grey"
      }
    },
    {
      name: "Smoke Detectors",
      price: "₹700",
      img: "/product/Screenshot 2025-08-08 104455.png",
      description: "Optical smoke detector with loud alarm. Battery backup included.",
      specs: {
        "Type": "Photoelectric",
        "Power": "9V Battery",
        "Alarm Volume": ">85 dB",
        "Battery Life": "1 year",
        "Mounting": "Ceiling/Wall"
      }
    },
    {
      name: "Structural Design",
      price: "Depends on complexity",
      img: "/product/Screenshot 2025-08-08 111540.png",
      description: "Engineering services for structural planning. Includes drawings and reinforcement detailing.",
      specs: {
        "Service": "Structural Analysis & Design",
        "Standards": "IS Codes / Eurocodes",
        "Deliverables": "Drawings, Reports",
        "Software": "STAAD Pro, ETABS",
        "Applications": "Residential, Commercial"
      }
    },
    {
      name: "Landscape Design",
      price: "Depends on area",
      img: "/product/Screenshot 2025-08-08 111731.png",
      description: "Landscape design with irrigation planning. Suitable for residential and commercial spaces.",
      specs: {
        "Service": "Landscape Architecture",
        "Scope": "Layout, Planting, Irrigation",
        "Software": "AutoCAD, SketchUp",
        "Customization": "Yes",
        "Delivery": "2D & 3D Designs"
      }
    }
  ]
};

export default topProducts;
