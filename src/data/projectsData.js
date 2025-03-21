export const projectsData = [
  {
    id: 1,
    projectName: 'KRIA Evaluation Kit (ECT-KRIA-EVK)',
    projectDesc: 'High-performance IoT development kit for edge computing, based on the AMD Kria SOM (Zynq UltraScale+ MPSoC FPGA with quad-core 64-bit ARM processor).',
    tags: ['Zynq UltraScale+ MPSoC FPGA', 'Vivado', 'Vitis', 'BIST', 'Petalinux', 'KRIA SOM', 'Verilog', 'Embedded C', 'FSBL', 'PCIe'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2024-/KRIA%20Evaluation%20Kit%20(ECT-KRIA-EVK)/README.md',
    image: 'https://ectron.com/wp-content/uploads/2024/05/ECT-KRIA-EVK.png'
  },
  {
    id: 2,
    projectName: 'Embedded Machine Monitor (ECT-EMM)',
    projectDesc: 'Embedded Machine Monitor (ECT-EMM) - a highly reliable device to monitor, control and provide analytics for 6000+ high-speed industrial Turbines/Engines worldwide.',
    tags: ['Embedded C', 'IAR', 'DSP', 'Firmware Development', 'HART'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2024-/Embedded%20Machine%20Monitor%20(ECT-EMM)/README.md',
    image: 'https://ectron.com/wp-content/uploads/2024/05/EMM-Transparent.png'
  },
  {
    id: 3,
    projectName: 'LabVIEW HIL Tests for Embedded Machine Monitor',
    projectDesc: 'LabVIEW based test system, to fully automate Hardware-in-the-Loop (HIL) verification, streamline testing process and significantly reduce ECT-EMM product validation time.',
    tags: ['LabVIEW', 'DSP', 'HIL', 'HART', 'Python', 'Test Automation'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2024-/LabVIEW%20HIL%20Tests%20for%20Embedded%20Machine%20Monitor/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2024-/LabVIEW%20HIL%20Tests%20for%20Embedded%20Machine%20Monitor/00LabVIEW%20HIL%20Tester%20Setup.jpg'
  },
  {
    id: 4,
    projectName: 'Enhanced Ethernet Network Interface Card (EENIC)',
    projectDesc: 'Enhanced Ethernet Network Interface Card (EENIC) is an FPGA board, enabling high-speed data transfer between network (Ethernet) and Host memory (PCIe).',
    tags: ['Zynq 7000 SoC', 'Vivado', 'Vitis', 'Ebmedded C', 'PCIe', 'pcie xdma driver', 'Petalinux'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2024-/Enhanced%20Ethernet%20Network%20Interface%20Card%20(EENIC)/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2024-/Enhanced%20Ethernet%20Network%20Interface%20Card%20(EENIC)/0EENIC%20Board%20Components%20Explained.png'
  },
  {
    id: 5,
    projectName: 'Digital Controller Board (ECT-DGCB-3045)',
    projectDesc: 'Digital Controller Board (DGCB) - a Computer-On-Module (COM), whit multiple consumer/industrial applications (Embedded IoT, Signal Processing, Machine Control, Edge IIoT, Industrial Vision etc.)',
    tags: ['Zynq 7000 SoC', 'Vivado', 'Vitis', 'Embedded C', 'Verilog', 'BIST', 'FSBL', 'Petalinux'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2024-/Digital%20Controller%20Board%20(ECT-DGCB-3045)/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2024-/Digital%20Controller%20Board%20(ECT-DGCB-3045)/01DGCB%20Board%20Photo%20with%20Components%20Call-outs.jpg'
  },
  {
    id: 6,
    projectName: 'Digital Controller Base Board (ECT-DGCB-BB)',
    projectDesc: 'Digital Controller Carrier Board (ECT-DGCB-BB) has a rich set of interfaces specifically meant for developing the IoT applications: Raspberry Pi HAT, Gigabit Ethernet, USB 2.0, Two Mini PCIe x1 (5Gb), LCD, SD Card, Digital Outputs, Analog&Digtal I/O. It is compatible with Ectron Digital Controller (ECT-DGCB) daughter board, as well as Raspberry Pi/LoRaWAN boards.',
    tags: ['Zynq 7000 SoC', 'Vivado', 'Vitis', 'Embedded C', 'Verilog', 'BIST', 'Petalinux', 'FSBL', 'Raspberry Pi', 'LoRaWAN', 'PCIe'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2024-/Digital%20Controller%20Base%20Board%20(ECT-DGCB-BB)/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2024-/Digital%20Controller%20Base%20Board%20(ECT-DGCB-BB)/01ECT-DGCB-BB%20Board%20Photo%20with%20Tags.jpg'
  },
  {
    id: 7,
    projectName: 'Digital Controller Evaluation Kit (ECT-DGCB-EVK)',
    projectDesc: 'Digital Controller Evaluation Kit (ECT-DGCB-EVK) can carry Ectron Digital Controller (ECT-DGCB) daughter board and Raspberry Pi\\LoRaWAN boards. It has a variety of interfaces (Gigabit Ethernet, USB2.0, GPIB, ADC, DAC, Two Display Interfaces, Keypad, Digital I/O, SD Card), targeting such applications as IoT and Automation, Test and Measurement Systems, Edge Computing, etc.',
    tags: ['Zynq 7000 SoC', 'Vivado', 'Vitis', 'Embedded C', 'Verilog', 'BIST', 'Petalinux', 'FSBL', 'Raspberry Pi', 'LoRaWAN'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2024-/Digital%20Controller%20Evaluation%20Kit%20(ECT-DGCB-EVK)/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2024-/Digital%20Controller%20Evaluation%20Kit%20(ECT-DGCB-EVK)/0ECT-DGCB-EVK%20Board%20with%20Tags.jpg'
  },
  {
    id: 8,
    projectName: 'Synaptic Engine Generation',
    projectDesc: 'FPGA and Embedded C design of highly reconfigurable FPGA/ASIC Synaptic Engine Generator, that integrates into standard compiler process, providing an average of x6 speedup, enabling customers an easy-to-use, low-power high-performance solutions with unique architecture.',
    tags: ['Altera/Xilinx SoC FPGAs', 'Quartus', 'Vivado', 'VHDL', 'Embedded C', 'ActiveHDL', 'ModelSim', 'Matlab'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2024-/Synaptic%20Engine%20Generator/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2024-/Synaptic%20Engine%20Generator/00Synaptic%20Engine%20Generator%20FPGA%20Block%20Diagram.png'
  },
  {
    id: 9,
    projectName: 'Combined Media System for Recording Studios',
    projectDesc: 'Combined Media System project included full cycle of development and hardware integration of several FPGA and processor designs required for professional Audio/Video, Ethernet and Intercom devices',
    tags: ['Xilinx ISE', 'FPGA', 'Microprocessor', 'VHDL', 'SystemVerilog', 'Embedded C', 'DSP', 'MADI', 'Ethernet', 'PicoBlaze'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/Combined%20Media%20System%20for%20Recording%20Studios/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/Combined%20Media%20System%20for%20Recording%20Studios/00SDF%20Front%20Panel.jpg'
  },
  {
    id: 10,
    projectName: 'All-In-One Keyboard (AIOK) Firmware Development',
    projectDesc: 'A wall-mounted wireless access control keypad designed to protect doorways from unauthorized entry or exit, provide access security and event alarming, wirelessly transmit data to a central facilities station for monitoring',
    tags: ['Embedded C', 'MPLAB', 'Keil', 'firmware development', 'Touchscreen', 'PIC18', 'Silicon Labs Simplicity Studio'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/AIO%20Keypad%20Firmware%20Development%20(AIOK)/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/AIO%20Keypad%20Firmware%20Development%20(AIOK)/1AIO%20Keypad.png'
  },
  {
    id: 11,
    projectName: 'Cash Drawer Driver 64-Bit Development (CDD64)',
    projectDesc: 'Rewriting current cash drawer kernel driver for PAR EverServ 7000 and EverServ 7200 models into a 64-bit driver using Kernel-Mode Driver Framework (KMDF) with WMI support and Demo Application.',
    tags: ['Kernel-Mode Driver Framework (KMDF)', 'WMI', 'C++', 'Visual Studio', 'WDF', 'WDM', 'MFC', 'WDK'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/Cash%20Drawer%20Driver%2064-Bit%20Development%20(CDD64)/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/Cash%20Drawer%20Driver%2064-Bit%20Development%20(CDD64)/0Cash%20Drawer%20Terminal.jpg'
  },
  {
    id: 12,
    projectName: 'Python Audio-Tempo-Processor',
    projectDesc: 'A Python GUI application that allows you to batch process audio files by changing their tempo with optional compression to reduce file size. The application uses FFmpeg for audio processing in multi-threading mode and supports multiple audio formats.',
    tags: ['Python', 'Audio Processing', 'Multithreading', 'FFMPEG', 'GUI'],
    demo: 'https://github.com/vengin/Audio-Tempo-Processor',
    image: 'https://raw.githubusercontent.com/vengin/Audio-Tempo-Processor/dev/docs/tempo.png'
  },
  {
    id: 13,
    projectName: 'LabVIEW Tests for CSRD',
    projectDesc: 'Building LabVIEW automated test framework, verifying proper FPGA firmware (Xilinx/Altera FPGAs with NIOS soft-processors) interaction with other PCB components (a full range of digital and analog circuitry).',
    tags: ['LabVIEW', 'Verilog', 'Embedded C', 'FPGA', 'Quartus', 'Xilinx ISE', 'NIOS', 'Modelsim', 'TCL'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/LabVIEW%20Tests%20for%20CSRD/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/LabVIEW%20Tests%20for%20CSRD/00CSRD%20PHW-HW%20Integration%20Test%20Setup.png'
  },
  {
    id: 14,
    projectName: 'LabVIEW Tests for SPO',
    projectDesc: 'LabVIEW tests to verify FPGA and hardware modules (Analog Transmitter/Receiver, Real Time Clock, Ethernet, Decelerometer, Tachometer, RS-485, SPI, PWM, Voltage Monitors, Isolated Window Comparators, Discrete I/O)',
    tags: ['LabVIEW', 'Quartus', 'NIOS', 'Embedded C', 'Altera FPGA', 'Test Automation', 'Python'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/LabVIEW%20Tests%20for%20SPO/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/LabVIEW%20Tests%20for%20SPO/00Implemented%20LabVIEW%20Modules%20Catalog.png'
  },
  {
    id: 15,
    projectName: 'MICROTRAX Programmable Hardware Testbenches',
    projectDesc: 'Fully automated FPGA project verification via scripted testbenches. Providing detailed High/Low level documentation for Microtrax 2-out-of-2 system for Railway Applications.',
    tags: ['Altera Quartus', 'Xilinx ISE', 'FPGA', 'Modelsim', 'Test Automation', 'TCL', 'Python'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/MICROTRAX%20Programmable%20Hardware%20Testbenches%20and%20Design%20Documentation/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/MICROTRAX%20Programmable%20Hardware%20Testbenches%20and%20Design%20Documentation/00Example%20Test%20Setup%20with%20PC%20Diagnostic%20Tool%20to%20Microtrax%20Unit.jpg'
  },
  {
    id: 16,
    projectName: 'Precision Station Stop Transmitter (PSST)',
    projectDesc: 'VDHL design for FPGA Precision Station Stop (PSS) Transmitter module, providing train high precision positioning at a station (via transmitting a wide-band signal, causing resonance at a specific frequency, which is detected as a marker for position).',
    tags: ['Altera Quartus', 'FPGA', 'VHDL', 'ModelSim', 'MATLAB', 'DSP', 'TCL'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/Precision%20Station%20Stop%20Transmitter%20(PSST)/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/Precision%20Station%20Stop%20Transmitter%20(PSST)/00PSS%20Transmitter%20Architecture.png'
  },
  {
    id: 17,
    projectName: 'Aiphone IX-OnGuard Integration for Device Translator Driver',
    projectDesc: 'A skeleton COM object for the Device Translator Driver was implemented, to translate events to/from Lenel OnGuard System via Socket Interface Protocol, integrating and interfacing with Aiphone IX Intercom System.',
    tags: ['C/C++', 'COM objects', 'HTTP/HTTS', 'OpenSSL', 'Web-Server', 'Visual Studio', 'OnGuard SDK', 'SQL'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/Aiphone%20IX-OnGuard%20Integration%20for%20Device%20Translator%20Driver%20(IXSI)/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/Aiphone%20IX-OnGuard%20Integration%20for%20Device%20Translator%20Driver%20(IXSI)/0IX%20Series%20Products.jpg'
  },
  {
    id: 18,
    projectName: 'Programmable Hardware Testbenches (PHWTB) for SPO board',
    projectDesc: 'System level and individual testbenches to fully automate verification process for many FPGA modules: Supervisory (Voltage Monitoring, Watchdog, Reset); Serial Communications (Ethernet, SPI), Analog Receiver (Gain Control, Sampling and Routing Control, DSP, Diagnostics), Analog Transmitter (FSK and Multi-frequency transmitters), Decelerometer, Tachometer, PWM, Current Loop',
    tags: ['Altera Quartus', 'FPGA', 'VHDL', 'ModelSim', 'MATLAB', 'DSP', 'TCL'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/Programmable%20Hardware%20Testbenches%20(PHWTB)/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/Programmable%20Hardware%20Testbenches%20(PHWTB)/0SPO%20Board%20-%20HW-PHW%20Architecture.png'
  },
  {
    id: 19,
    projectName: 'Tabletop UI for Marknet Fetch Product',
    projectDesc: 'This is a Qt-based complete cataloging application for desktop/tablets improve cataloging efficiency and assist companies in growing their business. It handles all stages of auction catalog management and ensures smooth synchronization in erratic and high demand auction environment.',
    tags: ['Qt 5', 'C++', 'QtCreator', 'GUI', 'synchronization'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/Tabletop%20UI%20for%20Marknet%20Fetch%20Product%20(MarkNet-FETCH)/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/Tabletop%20UI%20for%20Marknet%20Fetch%20Product%20(MarkNet-FETCH)/03Add%20a%20Lot%20Page.jpg'
  },
  {
    id: 20,
    projectName: 'Stand for Automated PCB Programming and Testing',
    projectDesc: 'Multi-purpose stand for programming and testing 3 different sets of PCBs. A set of algorithms was developed to verify various aspects of the equipment under test: signals and busses connectivity, analog signal verification, memory tests, FPGA and microprocessors configuration and unit testing, etc. ',
    tags: ['Xilinx ISE', 'Active-HDL', 'Keil uVision', 'Visual Studio', 'MFC', 'MATLAB', 'SVN', 'P-CAD', 'USB'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/Stand%20Equipment%20for%20PCB%20Programming%20and%20Testing/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/Stand%20Equipment%20for%20PCB%20Programming%20and%20Testing/0Stand%20with%20Board%20to%20Test%20Inserted.jpg'
  },
  {
    id: 21,
    projectName: 'Testing for Simulation Version of FX Zinc',
    projectDesc: 'Porting existing Zinc-based software used on a fully automated medical blood culture system from VxWorks to Windows 7 platform, modifying Zinc libraries. FX Hardware Simulator environment was used to emulate FX instrument hardware',
    tags: ['Visual Studio', 'C/C++', 'Zinc Designer', 'VMWare Workstation'],
    demo: 'https://github.com/vengin/portfolio/blob/main/2015-/BACTEC%20FX%20Screens%20Multilingual%20Testing%20for%20Simulation%20Version%20of%20FX%20(FXSIM%20Zinc)/README.md',
    image: 'https://raw.githubusercontent.com/vengin/portfolio/main/2015-/BACTEC%20FX%20Screens%20Multilingual%20Testing%20for%20Simulation%20Version%20of%20FX%20(FXSIM%20Zinc)/00Zinc%20Designer%20Default%20windows%20Displayed%20on%20Launch.png'
  },
]


// Do not remove any fields.
// Leave it blank instead as shown below

/* 
{
    id: 1,
    projectName: 'Car Pooling System',
    projectDesc: '',
    tags: ['Flutter', 'React'],
    demo: '',
    image: ''
}, 
*/
