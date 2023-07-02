const products = [

    // PROCESADORES
    { id: "ryzen9-7950x3d", name: "AMD Ryzen™ 9 7950X 3D-V Cache", price: 799.99, category: "processors", img: "/procesadores/ryzen9-7950x3d.png", stock: 10, description: "Procesador de escritorio AMD Ryzen™ de Serie 7000", },
    { id: "i9-13900k", name: "Intel® Core™ i9-13900K", price: 799.99,  category: "processors", img: "/procesadores/i9-13900k.png", stock: 10, description: "Procesador de escritorio Intel® Core™ de 13a Generación", },
    { id: "ryzen9-7950x", name: "AMD Ryzen™ 9 7950X", price: 649.99, category: "processors", img: "/procesadores/ryzen9-7950x.png", stock: 10, description: "Procesador de escritorio AMD Ryzen™ de Serie 7000", },
    { id: "i9-13900kf", name: "Intel® Core™ i9-13900KF", price: 799.99, category: "processors", img: "/procesadores/i9-13900kf.png", stock: 10, description: "Procesador de escritorio Intel® Core™ de 13a Generación", },
    { id: "ryzen9-7900x", name: "AMD Ryzen™ 9 7900X", price: 649.99, category: "processors", img: "/procesadores/ryzen9-7900x.png", stock: 10, description: "Procesador de escritorio AMD Ryzen™ de Serie 7000", },
    { id: "i9-13900f", name: "Intel® Core™ i9-13900F", price: 799.99, category: "processors", img: "/procesadores/i9-13900f.png", stock: 10, description: "Procesador de escritorio Intel® Core™ de 13a Generación", },
    { id: "ryzen9-5950x", name: "AMD Ryzen™ 9 5950X", price: 649.99, category: "processors", img: "/procesadores/ryzen9-5950x.png", stock: 10, description: "Procesador de escritorio AMD Ryzen™ de Serie 5000", },
    { id: "i9-12900k", name: "Intel® Core™ i9-12900K", price: 799.99, category: "processors", img: "/procesadores/i9-12900k.png", stock: 10, description: "Procesador de escritorio Intel® Core™ de 12a Generación", },
    { id: "ryzen9-5900x", name: "AMD Ryzen™ 9 5900X", price: 649.99, category: "processors", img: "/procesadores/ryzen9-5900x.png", stock: 10, description: "Procesador de escritorio AMD Ryzen™ de Serie 5000", },
    { id: "i9-12900kf", name: "Intel® Core™ i9-12900KF", price: 799.99,  category: "processors",img: "/procesadores/i9-12900kf.png", stock: 10, description: "Procesador de escritorio Intel® Core™ de 12a Generación", },
    { id: "ryzen7-7700x", name: "AMD Ryzen™ 7 7700X", price: 649.99, category: "processors", img: "/procesadores/ryzen7-7700x.png", stock: 10, description: "Procesador de escritorio AMD Ryzen™ de Serie 7000", },
    { id: "i9-12900f", name: "Intel® Core™ i9-12900F", price: 799.99, category: "processors", img: "/procesadores/i9-12900f.png", stock: 10, description: "Procesador de escritorio Intel® Core™ de 12a Generación", },
    { id: "ryzen7-5800x3d", name: "AMD Ryzen™ 7 5800X 3D-V Cache", price: 649.99, category: "processors", img: "/procesadores/ryzen7-5800x3d.png", stock: 10, description: "Procesador de escritorio AMD Ryzen™ de Serie 5000", },
    { id: "i7-13700K", name: "Intel® Core™ i7-13700K", price: 799.99, category: "processors", img: "/procesadores/i7-13700k.png", stock: 10, description: "Procesador de escritorio Intel® Core™ de 13a Generación", },
    { id: "ryzen7-5700x", name: "AMD Ryzen™ 7 5700X", price: 649.99, category: "processors", img: "/procesadores/ryzen7-5700x.png", stock: 10, description: "Procesador de escritorio AMD Ryzen™ de Serie 5000", },
    { id: "i7-12700K", name: "Intel® Core™ i7-12700K", price: 799.99, category: "processors", img: "/procesadores/i7-12700k.png", stock: 10, description: "Procesador de escritorio Intel® Core™ de 12a Generación", },
    { id: "ryzen5-7600x", name: "AMD Ryzen™ 5 7600X", price: 649.99, category: "processors", img: "/procesadores/ryzen5-7600x.png", stock: 10, description: "Procesador de escritorio AMD Ryzen™ de Serie 7000", },
    { id: "i5-13600K", name: "Intel® Core™ i5-13600K", price: 799.99, category: "processors", img: "/procesadores/i5-13600k.png", stock: 10, description: "Procesador de escritorio Intel® Core™ de 13a Generación", },
    { id: "ryzen5-5600x", name: "AMD Ryzen™ 5 5600X", price: 649.99, category: "processors", img: "/procesadores/ryzen5-5600x.png", stock: 10, description: "Procesador de escritorio AMD Ryzen™ de Serie 5000", },
    { id: "i5-12600K", name: "Intel® Core™ i5-12600K", price: 799.99, category: "processors", img: "/procesadores/i5-12600k.png", stock: 10, description: "Procesador de escritorio Intel® Core™ de 12a Generación", },

    // TARJETAS GRAFICAS
    { id: "4090-asus-rog", name: "Asus ROG Strix Geforce RTX™ 4090", price: 2499.99, category: "graphics-cards", img: "/graficas/4090-asus-rog.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 40", },
    { id: "7900xtx-asus-tuf", name: "Asus Radeon™ RX 7900XTX TUF Gaming", price: 2499.99, category: "graphics-cards", img: "/graficas/7900xtx-asus-tuf.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 7000", },
    { id: "4090-aorus", name: "Gigabyte Geforce RTX™ 4090 Aorus", price: 2499.99, category: "graphics-cards", img: "/graficas/4090-aorus.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 40", },
    { id: "7900xtx-aorus", name: "Radeon™ RX 7900XTX Aorus Elite", price: 2499.99, category: "graphics-cards", img: "/graficas/7900xtx-aorus.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 7000", },
    { id: "4090-msi-gxt", name: "Geforce RTX™ 4090 MSI Gaming X Trio", price: 2499.99, category: "graphics-cards", img: "/graficas/4090-msi-gxt.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 40", },
    { id: "7900xtx-asrock-phantom", name: "Radeon™ RX 7900XTX Asrock Phantom", price: 2499.99, category: "graphics-cards", img: "/graficas/7900xtx-asrock-phantom.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 7000", },
    { id: "4080-asus-tuf", name: "Geforce RTX™ 4080 Asus TUF", price: 2499.99, category: "graphics-cards", img: "/graficas/4080-asus-tuf.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 40", },
    { id: "7900xt-msi-gtc", name: "Radeon™ RX 7900XT MSI Gaming Trio Classic", price: 2499.99, category: "graphics-cards", img: "/graficas/7900xt-msi-gtc.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 7000", },
    { id: "4080-gigabyte", name: "Geforce RTX™ 4080 Gigabyte", price: 2499.99, category: "graphics-cards", img: "/graficas/4080-gigabyte.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 40", },
    { id: "7900xt-gigabyte", name: "Radeon™ RX 7900XT Gigabyte", price: 2499.99, category: "graphics-cards", img: "/graficas/7900xt-gigabyte.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 7000", },
    { id: "3090ti-asus-rog", name: "Geforce RTX™ 3090 Ti Asus ROG", price: 2499.99, category: "graphics-cards", img: "/graficas/3090ti-asus-rog.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 30", },
    { id: "6950xt-msi-gxt", name: "Radeon™ RX 6950XT MSI Gaming X Trio", price: 2499.99, category: "graphics-cards", img: "/graficas/6950xt-msi-gxt.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 6000", },
    { id: "3090-msi-ventus3x", name: "Geforce RTX™ 3090 MSI Ventus 3X", price: 2499.99, category: "graphics-cards", img: "/graficas/3090-msi-ventus3x.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 30", },
    { id: "6900xt-powercolor", name: "Radeon™ RX 6900XT MSI Powercolor Red Devil", price: 2499.99, category: "graphics-cards", img: "/graficas/6900xt-powercolor-reddevil.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 6000", },
    { id: "3080ti-msi-suprimx", name: "Geforce RTX™ 3080 Ti MSI Suprim X", price: 2499.99, category: "graphics-cards", img: "/graficas/3080ti-msi-suprimx.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 30", },
    { id: "6850xt-asus-tuf", name: "Radeon™ RX 6850XT Asus TUF", price: 2499.99, category: "graphics-cards", img: "/graficas/6850xt-asus-tuf.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 6000", },
    { id: "3080-asus-tuf", name: "Geforce RTX™ 3080 Asus TUF", price: 2499.99, category: "graphics-cards", img: "/graficas/3080-asus-tuf.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 30", },
    { id: "6800xt-gigabyte", name: "Radeon™ RX 6800XT Gigabyte", price: 2499.99, category: "graphics-cards", img: "/graficas/6800xt-gigabyte.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 6000", },
    { id: "3070ti-gigabyte", name: "Geforce RTX™ 3070 Ti Gigabyte", price: 2499.99, category: "graphics-cards", img: "/graficas/3070ti-gigabyte.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 30", },
    { id: "6750xt-asrock-phantom", name: "Radeon™ RX 6750XT Asrock Phantom", price: 2499.99, category: "graphics-cards", img: "/graficas/6750xt-asrock-phantom.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 6000", },
    { id: "3070-msi-gzt", name: "Geforce RTX™ 3070 MSI Gaming Z Trio", price: 2499.99, category: "graphics-cards", img: "/graficas/3070-msi-gzt.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 30", },
    { id: "6700xt-aorus", name: "Radeon™ RX 6700XT Aorus Elite", price: 2499.99, category: "graphics-cards", img: "/graficas/6700xt-aorus.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 6000", },
    { id: "3060ti-aorus", name: "Geforce RTX™ 3060 Ti Aorus Master", price: 2499.99, category: "graphics-cards", img: "/graficas/3060ti-aorus.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 30", },
    { id: "6650xt-powercolor-reddevil", name: "Radeon™ RX 6650XT Powercolor Red Devil", price: 2499.99, category: "graphics-cards", img: "/graficas/6650xt-powercolor-reddevil.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 6000", },
    { id: "3060-zotac", name: "Geforce RTX™ 3060 Zotac Gaming", price: 2499.99, category: "graphics-cards", img: "/graficas/3060-zotac.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 30", },
    { id: "6600xt-asus-rog", name: "Radeon™ RX 6600XT Asus ROG", price: 2499.99, category: "graphics-cards", img: "/graficas/6600xt-asus-rog.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 6000", },
    { id: "3050-evga", name: "Geforce RTX™ 3050 EVGA XC", price: 2499.99, category: "graphics-cards", img: "/graficas/3050-evga.png", stock: 10, description: "Placa de video NVIDIA® Geforce RTX™ de Serie 30", },
    { id: "6500xt-msi-mech-2x", name: "Radeon™ RX 6500XT MSi Mech 2X", price: 2499.99, category: "graphics-cards", img: "/graficas/6500xt-msi-mech2x.png", stock: 10, description: "Placa de video AMD Radeon™ RX de Serie 6000", },
    { id: "arc-a770", name: "Intel® ARC™ A770", price: 2499.99, category: "graphics-cards", img: "/graficas/a770-intel.png", stock: 10, description: "Placa de video Intel® ARC™ de 1ra Generacion", },
    { id: "arc-a750", name: "Intel® ARC™ A750", price: 2499.99, category: "graphics-cards", img: "/graficas/a750-intel.png", stock: 10, description: "Placa de video Intel® ARC™ de 1ra Generacion", },

    // MOTHERBOARDS
    { id: "z790-aorus-elite", name: "Z790 Aorus Elite AX", price: 2499.99, category: "motherboards", img: "/motherboards/z790-aorus-elite.png", stock: 10, description: "Placa madre para procesadores Intel® Core™ de 13a Generación", },
    { id: "x670e-rog-che", name: "Asus ROG Crosshire X670E Extreme", price: 2499.99, category: "motherboards", img: "/motherboards/x670e-rog-che.png", stock: 10, description: "Placa madre para procesadores AMD Ryzen™ de Serie 7000", },
    { id: "z690-asrock-taichi", name: "Z690 Asrock Taichi", price: 2499.99, category: "motherboards", img: "/motherboards/z690-asrock-taichi.png", stock: 10, description: "Placa madre para procesadores Intel® Core™ de 13a Generación", },
    { id: "x570-aorus-elite", name: "X570 Aorus Elite", price: 2499.99, category: "motherboards", img: "/motherboards/x570-aorus-elite.png", stock: 10, description: "Placa madre para procesadores AMD Ryzen™ de Serie 5000", },
    { id: "b760m-gigabyte-gx", name: "B760M Gigabyte Gaming X", price: 2499.99, category: "motherboards", img: "/motherboards/b760m-gigabyte-gx.png", stock: 10, description: "Placa madre para procesadores Intel® Core™ de 13a Generación", },
    { id: "b650mds3h-gigabyte-ud", name: "B650M-DS3H Gigabyte UD", price: 2499.99, category: "motherboards", img: "/motherboards/b650mds3h-gigabyte-ud.png", stock: 10, description: "Placa madre para procesadores AMD Ryzen™ de Serie 7000", },
    { id: "b660m-msi-mag-mortar", name: "B660M MSI MAG Mortar", price: 2499.99, category: "motherboards", img: "/motherboards/b660m-msi-mag-mortar.png", stock: 10, description: "Placa madre para procesadores Intel de 12a Generación", },
    { id: "b550m-aorus-elite", name: "B550M Aorus Elite", price: 2499.99, category: "motherboards", img: "/motherboards/b550m-aorus-elite.png", stock: 10, description: "Placa madre para procesadores AMD Ryzen™ de Serie 5000", },
    { id: "h610me-d4-asus-prime", name: "H610M-E D4 Asus Prime", price: 2499.99, category: "motherboards", img: "/motherboards/h610me-d4-asus-prime.png", stock: 10, description: "Placa madre para procesadores Intel de 12a Generación", },
    { id: "a520m-aii-asus-prime", name: "A520M-A II Asus Prime", price: 2499.99, category: "motherboards", img: "/motherboards/a520m-aii-asus-prime.png", stock: 10, description: "Placa madre para procesadores AMD Ryzen™ de Serie 5000", },
    { id: "h510m-s2h-gigabyte", name: "H510M S2H Gigabyte UD", price: 2499.99, category: "motherboards", img: "/motherboards/h510m-s2h-gigabyte.png", stock: 10, description: "Placa madre para procesadores Intel de 12a Generación", },
    { id: "a320mh-gigabyte", name: "A320M-H Gigabyte UD", price: 2499.99, category: "motherboards", img: "/motherboards/a320mh-gigabyte.png", stock: 10, description: "Placa madre para procesadores AMD Ryzen™ de Serie 5000", },

    // MEMORIAS RAM
    { id: "ddr5-2x32-6000mhz-tridentz5", name: "Trident Z5 DDR5 64GB (2x32) 6000MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr5-2x32-6000mhz-tridentz5.png", stock: 10, description: "Memoria RAM DDR5 para escritorio", },
    { id: "ddr5-2x32-5200mhz-corsair-vengeance", name: "Corsair Vengeance DDR5 64GB (2x32) 5200MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr5-2x32-5200mhz-corsair-vengeance.png", stock: 10, description: "Memoria RAM DDR5 para escritorio", },
    { id: "ddr5-2x32-5200mhz-corsair-dominator", name: "Corsair Dominator DDR5 64GB (2x32) 5200MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr5-2x32-5200mhz-corsair-dominator.png", stock: 10, description: "Memoria RAM DDR5 para escritorio", },
    { id: "ddr5-2x16-5600mhz-corsair-dominator", name: "Corsair Dominator DDR5 32GB (2x16) 5600MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr5-2x16-5600mhz-corsair-dominator.png", stock: 10, description: "Memoria RAM DDR5 para escritorio", },
    { id: "ddr5-2x32-5200mhz-aorus", name: "Aorus DDR5 32GB (2x16) 5200MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr5-2x16-5200mhz-aorus.png", stock: 10, description: "Memoria RAM DDR5 para escritorio", },
    { id: "ddr5-2x32-4800mhz-corsair-vengeance", name: "Corsair Vengeance DDR5 32GB (2x16) 4800MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr5-2x16-4800mhz-corsair-vengeance.png", stock: 10, description: "Memoria RAM DDR5 para escritorio", },
    { id: "ddr4-2x32-4000mhz-tridentz-royal-silver", name: "Trident Z Royal Silver DDR4 64GB (2x32) 4000MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr4-2x32-4000mhz-tridentz-royal-silver.png", stock: 10, description: "Memoria RAM DDR4 para escritorio", },
    { id: "ddr4-2x32-3600mhz-corsair-vengeance-pro", name: "Corsair Vengeance PRO DDR4 64GB (2x32) 3600MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr4-2x32-3600mhz-corsair-vengeance-pro.png", stock: 10, description: "Memoria RAM DDR4 para escritorio", },
    { id: "ddr4-2x16-3200mhz-kingston-fury", name: "Kingston Fury DDR4 32GB (2x16) 3200MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr4-2x16-3200mhz-kingston-fury.png", stock: 10, description: "Memoria RAM DDR4 para escritorio", },
    { id: "ddr4-2x8-4600mhz-hyperx", name: "Hyperx Predator DDR4 16GB (2x8) 4600MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr4-2x8-4600mhz-hyperx.png", stock: 10, description: "Memoria RAM DDR4 para escritorio", },
    { id: "ddr4-2x4-3200mhz-crucial-ballistix", name: "Crucial Ballistix DDR4 8GB (2x4) 3200MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr4-2x4-3200mhz-crucial-ballistix.png", stock: 10, description: "Memoria RAM DDR4 para escritorio", },
    { id: "ddr4-4gb-2400mhz-crucial", name: "Crucial DDR4 4GB (1x1) 2400MHz", price: 2499.99, category: "ram-memories", img: "/ram/ddr4-4gb-2400mhz-crucial.png", stock: 10, description: "Memoria RAM DDR4 para escritorio", },

    // ALMACENAMIE,NTO
    { id: "nvme-2tb-wd-black", name: "SSD NVMe M.2 Western Digital Black 2TB", price: 2499.99, category: "storage", img: "/almacenamiento/nvme-2tb-wd-black.png", stock: 10, description: "Disco de Estado Sólido NvME M.2", },
    { id: "nvme-1tb-gigabyte", name: "SSD NVMe M.2 Gigabyte 1TB", price: 2499.99, category: "storage", img: "/almacenamiento/nvme-1tb-gigabyte.png", stock: 10, description: "Disco de Estado Sólido NvME M.2", },
    { id: "nvme-512gb-adata", name: "SSD NVMe M.2 Adata Legend 700 512GB", price: 2499.99, category: "storage", img: "/almacenamiento/nvme-512gb-adata.png", stock: 10, description: "Disco de Estado Sólido NvME M.2", },
    { id: "nvme-480gb-wd-green", name: "SSD NVMe M.2 Western Digital Green 480GB", price: 2499.99, category: "storage", img: "/almacenamiento/nvme-480gb-wd-green.png", stock: 10, description: "Disco de Estado Sólido NvME M.2", },
    { id: "nvme-256gb-kingston", name: "SSD NVMe M.2 Kingston A2000R 256GB", price: 2499.99, category: "storage", img: "/almacenamiento/nvme-256gb-kingston.png", stock: 10, description: "Disco de Estado Sólido NvME M.2", },
    { id: "nvme-128gb-adata-xpg", name: "SSD NVMe M.2 XPG SX6000 Lite 128GB", price: 2499.99, category: "storage", img: "/almacenamiento/nvme-128gb-adata-xpg.png", stock: 10, description: "Disco de Estado Sólido NvME M.2", },
    { id: "ssd-4tb-samsung-qvo870", name: "SSD Samsung QVO870 4TB", price: 2499.99, category: "storage", img: "/almacenamiento/ssd-4tb-samsung-qvo870.png", stock: 10, description: "Disco de Estado Sólido SATA III", },
    { id: "ssd-2tb-wd-blue", name: "SSD Western Digital Blue 2TB", price: 2499.99, category: "storage", img: "/almacenamiento/ssd-2tb-wd-blue.png", stock: 10, description: "Disco de Estado Sólido SATA III", },
    { id: "ssd-1tb-wd-green", name: "SSD Western Digital Green 1TB", price: 2499.99, category: "storage", img: "/almacenamiento/ssd-1tb-wd-green.png", stock: 10, description: "Disco de Estado Sólido SATA III", },
    { id: "ssd-960gb-kingston", name: "SSD Kingston A400 960GB", price: 2499.99, category: "storage", img: "/almacenamiento/ssd-960gb-kingston.png", stock: 10, description: "Disco de Estado Sólido SATA III", },
    { id: "ssd-512gb-kingston", name: "SSD Kingston KC600 512GB", price: 2499.99, category: "storage", img: "/almacenamiento/ssd-512gb-kingston.png", stock: 10, description: "Disco de Estado Sólido SATA III", },
    { id: "ssd-480gb-kingston", name: "SSD Kingston A400 480GB", price: 2499.99, category: "storage", img: "/almacenamiento/ssd-480gb-kingston.png", stock: 10, description: "Disco de Estado Sólido SATA III", },
    { id: "ssd-256gb-adata", name: "SSD Adata SU650 256GB", price: 2499.99, category: "storage", img: "/almacenamiento/ssd-256gb-adata.png", stock: 10, description: "Disco de Estado Sólido SATA III", },
    { id: "ssd-240gb-gigabyte", name: "SSD Gigabyte 240GB", price: 2499.99, category: "storage", img: "/almacenamiento/ssd-240gb-gigabyte.png", stock: 10, description: "Disco de Estado Sólido SATA III", },
    { id: "ssd-128gb-pny", name: "SSD PNY 128GB", price: 2499.99, category: "storage", img: "/almacenamiento/ssd-128gb-pny.png", stock: 10, description: "Disco de Estado Sólido SATA III", },
    { id: "ssd-120gb-patriot", name: "SSD Patriot Burst Elite 120GB", price: 2499.99, category: "storage", img: "/almacenamiento/ssd-120gb-patriot.png", stock: 10, description: "Disco de Estado Sólido SATA III", },
    { id: "hdd-18tb-wd-red", name: "HDD Western Digital Red PRO 18TB", price: 2499.99, category: "storage", img: "/almacenamiento/hdd-18tb-wd-red.png", stock: 10, description: "Disco Duro HDD SATA III", },
    { id: "hdd-16tb-seagate", name: "HDD Seagate SkyHawk AI 16TB", price: 2499.99, category: "storage", img: "/almacenamiento/hdd-16tb-seagate.png", stock: 10, description: "Disco Duro HDD SATA III", },
    { id: "hdd-14tb-wd-purple", name: "HDD Western Digital Purple 14TB", price: 2499.99, category: "storage", img: "/almacenamiento/hdd-14tb-wd-purple.png", stock: 10, description: "Disco Duro HDD SATA III", },
    { id: "hdd-12tb-wd-gold", name: "HDD Western Digital Gold 12TB", price: 2499.99, category: "storage", img: "/almacenamiento/hdd-12tb-wd-gold.png", stock: 10, description: "Disco Duro HDD SATA III", },
    { id: "hdd-10tb-wd-black", name: "HDD Western Digital Black 10TB", price: 2499.99, category: "storage", img: "/almacenamiento/hdd-10tb-wd-black.png", stock: 10, description: "Disco Duro HDD SATA III", },
    { id: "hdd-8tb-seagate", name: "HDD Seagate SkyHawk AI 8TB", price: 2499.99, category: "storage", img: "/almacenamiento/hdd-8tb-seagate.png", stock: 10, description: "Disco Duro HDD SATA III", },
    { id: "hdd-4tb-wd-blue", name: "HDD Western Digital Blue 4TB", price: 2499.99, category: "storage", img: "/almacenamiento/hdd-4tb-wd-blue.png", stock: 10, description: "Disco Duro HDD SATA III", },
    { id: "hdd-2tb-seagate", name: "HDD Seagate Barracuda 2TB", price: 2499.99, category: "storage", img: "/almacenamiento/hdd-2tb-seagate.png", stock: 10, description: "Disco Duro HDD SATA III", },
    { id: "hdd-1tb-wd-blue", name: "HDD Western Digital Blue 1TB", price: 2499.99, category: "storage", img: "/almacenamiento/hdd-1tb-wd-blue.png", stock: 10, description: "Disco Duro HDD SATA III", },
    { id: "hdd-500gb-wd-blue", name: "HDD Western Digital Blue 500GB", price: 2499.99, category: "storage", img: "/almacenamiento/hdd-500gb-wd-blue.png", stock: 10, description: "Disco Duro HDD SATA III", },

    // FUENTES DE ALIMENTACION
    { id: "80+titanium-rogthor-1600w", name: "Asus ROG THOR 80+ Titanium 1600W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+titanium-rogthor-1600w.png", stock: 10, description: "Fuente de poder con certificacion 80+ Titanium", },
    { id: "80+titanium-seasonic-prime-1200w", name: "Seasonic Prime 80+ Titanium 1200W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+titanium-seasonic-prime-1200w.png", stock: 10, description: "Fuente de poder con certificacion 80+ Titanium", },
    { id: "80+titanium-corsair-ax1000", name: "Corsair AX1000 80+ Titanium 1000W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+titanium-corsair-ax1000.png", stock: 10, description: "Fuente de poder con certificacion 80+ Titanium", },
    { id: "80+platinum-aorus-1200w", name: "Aorus 80+ Platinum 1200W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+platinum-aorus-1200w.png", stock: 10, description: "Fuente de poder con certificacion 80+ Platinum", },
    { id: "80+platinum-corsair-hx1200", name: "Corsair HX1000 80+ Platinum 1200W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+platinum-corsair-hx1200.png", stock: 10, description: "Fuente de poder con certificacion 80+ Platinum", },
    { id: "80+gold-gigabyte-p750gm", name: "Gigabyte P750GM 80+ Gold 750W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+gold-gigabyte-p750gm.png", stock: 10, description: "Fuente de poder con certificacion 80+ Gold", },
    { id: "80+gold-msi-a750gf", name: "MSI A750GF 80+ Gold 750W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+gold-msi-a750gf.png", stock: 10, description: "Fuente de poder con certificacion 80+ Gold", },
    { id: "80+silver-corsair-hx1050", name: "Corsair HX1050 80+ Silver 1050W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+silver-corsair-hx1050.png", stock: 10, description: "Fuente de poder con certificacion 80+ Silver", },
    { id: "80+silver-corsair-vengeance-750m", name: "Corsair Vengeance 750M 80+ Silver 750W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+silver-corsair-vengeance-750m.png", stock: 10, description: "Fuente de poder con certificacion 80+ Silver", },
    { id: "80+bronze-thermaltake-smart-bx1-650w", name: "Thermaltake Smart BX1 80+ Bronze 650W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+bronze-thermaltake-smart-bx1-650w.png", stock: 10, description: "Fuente de poder con certificacion 80+ Bronce", },
    { id: "80+bronze-gigabyte-p650b", name: "Gigabyte P650B 80+ Bronze 650W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+bronze-gigabyte-p650b.png", stock: 10, description: "Fuente de poder con certificacion 80+ Bronce", },
    { id: "80+white-cooler-master-mwe-550w", name: "Cooler Master 80+ White 550W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+white-cooler-master-mwe-550w.png", stock: 10, description: "Fuente de poder con certificacion 80+ White", },
    { id: "80+white-thermaltake-smart-500w", name: "Thermaltake Smart 80+ White 500W", price: 2499.99, category: "power-suplies", img: "/fuentes/80+white-thermaltake-smart-500w.png", stock: 10, description: "Fuente de poder con certificacion 80+ White", },
]

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products)
        }, 100)
    })
}

export const getProductById = (id) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === id))
        }, 100)
    })
}

export const getProductsByCategory = (categoryId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.filter(prod => prod.category === categoryId))
        }, 100)
    })
}