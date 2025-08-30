// Enhanced Figma Clone - Complete Implementation
const icons = {
  figmaIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-figma-icon lucide-figma"><path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z"/><path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z"/><path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z"/><path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z"/><path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z"/></svg>',

  searchIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-search-icon lucide-search"><path d="m21 21-4.34-4.34"/><circle cx="11" cy="11" r="8"/></svg>',
  xIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  checkIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check"><path d="M20 6 9 17l-5-5"/></svg>',
  settingsIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-settings2-icon lucide-settings-2"><path d="M14 17H5"/><path d="M19 7h-9"/><circle cx="17" cy="17" r="3"/><circle cx="7" cy="7" r="3"/></svg>',

  mouseIcon:'<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-mouse-pointer2-icon lucide-mouse-pointer-2"><path d="M4.037 4.688a.495.495 0 0 1 .651-.651l16 6.5a.5.5 0 0 1-.063.947l-6.124 1.58a2 2 0 0 0-1.438 1.435l-1.579 6.126a.5.5 0 0 1-.947.063z"/></svg>',
  handIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-hand-icon lucide-hand"><path d="M18 11V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2"/><path d="M14 10V4a2 2 0 0 0-2-2a2 2 0 0 0-2 2v2"/><path d="M10 10.5V6a2 2 0 0 0-2-2a2 2 0 0 0-2 2v8"/><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"/></svg>',
  scaleIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scaling-icon lucide-scaling"><path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M14 15H9v-5"/><path d="M16 3h5v5"/><path d="M21 3 9 15"/></svg>',
  
  frameIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-frame-icon lucide-frame"><line x1="22" x2="2" y1="6" y2="6"/><line x1="22" x2="2" y1="18" y2="18"/><line x1="6" x2="6" y1="2" y2="22"/><line x1="18" x2="18" y1="2" y2="22"/></svg>',
  sectionIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-scan-icon lucide-scan"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/></svg>',
  sliceIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-slice-icon lucide-slice"><path d="M11 16.586V19a1 1 0 0 1-1 1H2L18.37 3.63a1 1 0 1 1 3 3l-9.663 9.663a1 1 0 0 1-1.414 0L8 14"/></svg>',
  
  rectangleIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-square-icon lucide-square"><rect width="18" height="18" x="3" y="3" rx="2"/></svg>',
  lineIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-spline-icon lucide-spline"><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M5 17A12 12 0 0 1 17 5"/></svg>',
  arrowIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-move-up-right-icon lucide-move-up-right"><path d="M13 5H19V11"/><path d="M19 5L5 19"/></svg>',
  ellipseIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-circle-icon lucide-circle"><circle cx="12" cy="12" r="10"/></svg>',
  polygonIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-triangle-icon lucide-triangle"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"/></svg>',
  starIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-star-icon lucide-star"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"/></svg>',
  imageIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-image-plus-icon lucide-image-plus"><path d="M16 5h6"/><path d="M19 2v6"/><path d="M21 11.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h7.5"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/><circle cx="9" cy="9" r="2"/></svg>',
  
  penIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pen-tool-icon lucide-pen-tool"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"/><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"/><path d="m2.3 2.3 7.286 7.286"/><circle cx="11" cy="11" r="2"/></svg>',
  pencilIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pencil-icon lucide-pencil"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"/><path d="m15 5 4 4"/></svg>',
  
  textIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-type-icon lucide-type"><path d="M12 4v16"/><path d="M4 7V5a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2"/><path d="M9 20h6"/></svg>',
  
  commentIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-message-circle-icon lucide-message-circle"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"/></svg>',
  
  panelRightOpen: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-open-icon lucide-panel-right-open"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m10 15-3-3 3-3"/></svg>',
  panelRightClose: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-panel-right-close-icon lucide-panel-right-close"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M15 3v18"/><path d="m8 9 3 3-3 3"/></svg>',
  
  plusIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus-icon lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>',
  minusIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>',
  rulerIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ruler-icon lucide-ruler"><path d="M21.3 15.3a2.4 2.4 0 0 1 0 3.4l-2.6 2.6a2.4 2.4 0 0 1-3.4 0L2.7 8.7a2.41 2.41 0 0 1 0-3.4l2.6-2.6a2.41 2.41 0 0 1 3.4 0Z"/><path d="m14.5 12.5 2-2"/><path d="m11.5 9.5 2-2"/><path d="m8.5 6.5 2-2"/><path d="m17.5 15.5 2-2"/></svg>',
  codeIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml-icon lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>',
  
  chevronUpIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-up-icon lucide-chevron-up"><path d="m18 15-6-6-6 6"/></svg>',
  chevronDownIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-down-icon lucide-chevron-down"><path d="m6 9 6 6 6-6"/></svg>',
  
  alignStartHorizontalIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-start-horizontal-icon lucide-align-start-horizontal"><rect width="6" height="16" x="4" y="6" rx="2"/><rect width="6" height="9" x="14" y="6" rx="2"/><path d="M22 2H2"/></svg>',
  alignCenterHorizontalIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-center-horizontal-icon lucide-align-center-horizontal"><path d="M2 12h20"/><path d="M10 16v4a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-4"/><path d="M10 8V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v4"/><path d="M20 16v1a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2v-1"/><path d="M14 8V7c0-1.1.9-2 2-2h2a2 2 0 0 1 2 2v1"/></svg>',
  alignEndHorizontalIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-end-horizontal-icon lucide-align-end-horizontal"><rect width="6" height="16" x="4" y="2" rx="2"/><rect width="6" height="9" x="14" y="9" rx="2"/><path d="M22 22H2"/></svg>',

  alignStartVerticalIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-start-vertical-icon lucide-align-start-vertical"><rect width="9" height="6" x="6" y="14" rx="2"/><rect width="16" height="6" x="6" y="4" rx="2"/><path d="M2 2v20"/></svg>',
  alignCenterVerticalIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-center-vertical-icon lucide-align-center-vertical"><path d="M12 2v20"/><path d="M8 10H4a2 2 0 0 1-2-2V6c0-1.1.9-2 2-2h4"/><path d="M16 10h4a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-4"/><path d="M8 20H7a2 2 0 0 1-2-2v-2c0-1.1.9-2 2-2h1"/><path d="M16 14h1a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1"/></svg>',
  alignEndVerticalIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-align-end-vertical-icon lucide-align-end-vertical"><rect width="16" height="6" x="2" y="4" rx="2"/><rect width="9" height="6" x="9" y="14" rx="2"/><path d="M22 22V2"/></svg>',

  rotateCWSquareIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-rotate-cw-square-icon lucide-rotate-cw-square"><path d="M12 5H6a2 2 0 0 0-2 2v3"/><path d="m9 8 3-3-3-3"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/></svg>',
  flipHorizontalIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flip-horizontal2-icon lucide-flip-horizontal-2"><path d="m3 7 5 5-5 5V7"/><path d="m21 7-5 5 5 5V7"/><path d="M12 20v2"/><path d="M12 14v2"/><path d="M12 8v2"/><path d="M12 2v2"/></svg>',
  flipVerticalIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-flip-vertical2-icon lucide-flip-vertical-2"><path d="m17 3-5 5-5-5h10"/><path d="m17 21-5-5-5 5h10"/><path d="M4 12H2"/><path d="M10 12H8"/><path d="M16 12h-2"/><path d="M22 12h-2"/></svg>',
  blendIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-blend-icon lucide-blend"><circle cx="9" cy="9" r="7"/><circle cx="15" cy="15" r="7"/></svg>',
  
  eyeClosedIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-closed-icon lucide-eye-closed"><path d="m15 18-.722-3.25"/><path d="M2 8a10.645 10.645 0 0 0 20 0"/><path d="m20 15-1.726-2.05"/><path d="m4 15 1.726-2.05"/><path d="m9 18 .722-3.25"/></svg>',
  eyeOpenIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>',
  moreIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>',

  arrowRightToLineIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-right-to-line-icon lucide-arrow-right-to-line"><path d="M17 12H3"/><path d="m11 18 6-6-6-6"/><path d="M21 5v14"/></svg>',
  arrowLeftToLineIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-to-line-icon lucide-arrow-left-to-line"><path d="M3 19V5"/><path d="m13 6-6 6 6 6"/><path d="M7 12h14"/></svg>',

  downloadIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-download-icon lucide-download"><path d="M12 15V3"/><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/></svg>',
  componentIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-component-icon lucide-component"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"/><path d="M2.297 11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"/><path d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 0z"/><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"/></svg>',
  brushIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-brush-icon lucide-brush"><path d="m11 10 3 3"/><path d="M6.5 21A3.5 3.5 0 1 0 3 17.5a2.62 2.62 0 0 1-.708 1.792A1 1 0 0 0 3 21z"/><path d="M9.969 17.031 21.378 5.624a1 1 0 0 0-3.002-3.002L6.967 14.031"/></svg>',
  bucketIcon: '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-paint-bucket-icon lucide-paint-bucket"><path d="m19 11-8-8-8.6 8.6a2 2 0 0 0 0 2.8l5.2 5.2c.8.8 2 .8 2.8 0L19 11Z"/><path d="m5 2 5 5"/><path d="M2 13h15"/><path d="M22 20a2 2 0 1 1-4 0c0-1.6 1.7-2.4 2-4 .3 1.6 2 2.4 2 4Z"/></svg>',
}

class FigmaClone {
  constructor() {
    this.state = {
      tool: 'select',
      zoom: 1,
      pan: { x: 0, y: 0 },
      shapes: [],
      comments: [],
      selectedIds: new Set(),
      dragging: { active: false, start: { x: 0, y: 0 }, origin: { x: 0, y: 0 }, mode: 'none', targetId: null },
      leftSidebarCollapsed: false,
      rightSidebarCollapsed: false,
      showRulers: true,
    };

    this.elements = {
      app: document.getElementById('app'),
      leftSidebar: document.getElementById('left-sidebar'),
      rightSidebar: document.getElementById('right-sidebar'),
      stage: document.getElementById('stage'),
      stageWrapper: document.getElementById('stage-wrapper'),
      viewport: document.getElementById('viewport'),
      layersList: document.getElementById('layers-list'),
      zoomDisplay: document.getElementById('zoom-display'),
      floatingZoomDisplay: document.getElementById('floating-zoom-display'),
      toolbar: document.getElementById('toolbar'),
      palette: document.getElementById('palette'),
      paletteInput: document.getElementById('palette-input'),
      rulerTop: document.getElementById('ruler-top'),
      rulerLeft: document.getElementById('ruler-left'),
      selectedName: document.getElementById('selected-name'),
      floatingLeft: document.getElementById('floating-left'),
      floatingRight: document.getElementById('floating-right'),
      floatingTopControls: document.getElementById('floating-top-controls'),
      effectsList: document.getElementById('effects-list'),
      exportList: document.getElementById('export-list'),
    };

    this.inspectorInputs = {
      x: document.getElementById('prop-x'),
      y: document.getElementById('prop-y'),
      w: document.getElementById('prop-w'),
      h: document.getElementById('prop-h'),
      fill: document.getElementById('prop-fill'),
      stroke: document.getElementById('prop-stroke'),
      strokeW: document.getElementById('prop-stroke-w'),
      radius: document.getElementById('prop-radius'),
      opacity: document.getElementById('prop-opacity'),
      rotation: document.getElementById('prop-rotation'),
    };

    this.init();
  }

  init() {
    this.setupEventListeners();
    this.setupToolbar();
    this.setupInspector();
    this.setupImageHandling();
    this.drawRulers();
    this.updateZoomDisplay();
    this.setTool('select');
    this.setupInfiniteCanvas();
    this.loadFromLocalStorage();
  }

  // Utility Functions
  uid() {
    return Math.random().toString(36).slice(2, 9);
  }

  stagePoint(evt) {
    const rect = this.elements.stage.getBoundingClientRect();
    return {
      x: (evt.clientX - rect.left) / this.state.zoom,
      y: (evt.clientY - rect.top) / this.state.zoom,
    };
  }

  // Setup Methods
  setupEventListeners() {
    // Sidebar collapse
    document.getElementById('collapse-left')?.addEventListener('click', () => this.toggleSidebar('left'));
    document.getElementById('collapse-right')?.addEventListener('click', () => this.toggleSidebar('right'));
    
    // Floating header expand buttons
    document.getElementById('expand-left')?.addEventListener('click', () => this.toggleSidebar('left'));
    document.getElementById('expand-right')?.addEventListener('click', () => this.toggleSidebar('right'));

    // Effects and Export
    document.getElementById('add-effect')?.addEventListener('click', () => this.addEffect());
    document.getElementById('add-export')?.addEventListener('click', () => this.addExport());

    // Command palette
    document.getElementById('open-command-palette')?.addEventListener('click', () => this.togglePalette(true));

    // Ruler toggle
    document.getElementById('ruler-toggle')?.addEventListener('click', () => this.toggleRulers());

    // Stage interactions
    this.elements.stage.addEventListener('mousedown', (e) => this.onStageMouseDown(e));
    window.addEventListener('mousemove', (e) => this.onMouseMove(e));
    window.addEventListener('mouseup', () => this.onMouseUp());

    // Viewport interactions for infinite canvas
    this.elements.viewport.addEventListener('wheel', (e) => this.onViewportWheel(e), { passive: false });
    this.elements.viewport.addEventListener('mousedown', (e) => this.onViewportMouseDown(e));

    // Keyboard shortcuts
    window.addEventListener('keydown', (e) => this.onKeyDown(e));

    // Prevent context menu on stage
    this.elements.stage.addEventListener('contextmenu', (e) => e.preventDefault());

    // Close palette on outside click
    document.addEventListener('click', (e) => {
      if (!this.elements.palette.contains(e.target) && !e.target.closest('#open-command-palette')) {
        this.togglePalette(false);
      }
    });
  }

  setupToolbar() {
    // Handle tool dropdown interactions
    const toolDropdowns = document.querySelectorAll('.tool-dropdown');
    toolDropdowns.forEach(dropdown => {
      const button = dropdown.querySelector('.tool');
      const content = dropdown.querySelector('.dropdown-content');
      
      if (content) {
        let hoverTimeout;
        
        dropdown.addEventListener('mouseenter', () => {
          clearTimeout(hoverTimeout);
          dropdown.classList.add('active');
        });
        
        dropdown.addEventListener('mouseleave', () => {
          hoverTimeout = setTimeout(() => {
            dropdown.classList.remove('active');
          }, 200);
        });

        // Handle dropdown item clicks
        content.addEventListener('click', (e) => {
          const item = e.target.closest('.dropdown-item');
          if (item) {
            const tool = item.dataset.tool;
            if (tool) {
              this.setTool(tool);
              dropdown.classList.remove('active');
            }
          }
        });
      }
    });

    // Handle direct tool clicks
    this.elements.toolbar.addEventListener('click', (e) => {
      const btn = e.target.closest('[data-tool]');
      if (btn && !btn.closest('.dropdown-content')) {
        this.setTool(btn.dataset.tool);
      }
    });
  }

  setupInspector() {
    // Bind inspector inputs
    Object.entries(this.inspectorInputs).forEach(([key, input]) => {
      if (input) {
        input.addEventListener('input', () => this.updateSelectedShape());
      }
    });
  }

  setupInfiniteCanvas() {
    // Make canvas truly infinite and scrollable
    this.elements.viewport.scrollLeft = 4000;
    this.elements.viewport.scrollTop = 3000;

    // Handle viewport scrolling for pan updates
    this.elements.viewport.addEventListener('scroll', () => {
      this.updateRulers();
    });
  }

  // Sidebar Management
  toggleSidebar(side) {
    if (side === 'left') {
      this.state.leftSidebarCollapsed = !this.state.leftSidebarCollapsed;
      this.elements.app.classList.toggle('left-collapsed', this.state.leftSidebarCollapsed);
      this.elements.leftSidebar.classList.toggle('collapsed', this.state.leftSidebarCollapsed);
    } else if (side === 'right') {
      this.state.rightSidebarCollapsed = !this.state.rightSidebarCollapsed;
      this.elements.app.classList.toggle('right-collapsed', this.state.rightSidebarCollapsed);
      this.elements.rightSidebar.classList.toggle('collapsed', this.state.rightSidebarCollapsed);
    }
    
    // Update floating header visibility
    this.updateFloatingHeader();
  }
  
  updateFloatingHeader() {
    // Update individual sidebar states
    this.elements.app.classList.toggle('left-collapsed', this.state.leftSidebarCollapsed);
    this.elements.app.classList.toggle('right-collapsed', this.state.rightSidebarCollapsed);
    
    // Show/hide floating elements based on collapse state
    const bothCollapsed = this.state.leftSidebarCollapsed && this.state.rightSidebarCollapsed;
    
    if (this.elements.floatingLeft) {
      this.elements.floatingLeft.style.display = this.state.leftSidebarCollapsed ? 'flex' : 'none';
    }
    
    if (this.elements.floatingRight) {
      this.elements.floatingRight.style.display = this.state.rightSidebarCollapsed ? 'flex' : 'none';
    }
    
    if (this.elements.floatingTopControls) {
      this.elements.floatingTopControls.style.display = bothCollapsed ? 'flex' : 'none';
    }
  }

  // Tool Management
  setTool(tool) {
    this.state.tool = tool;
    
    // Update toolbar button states
    document.querySelectorAll('.tool').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.tool === tool);
    });

    // Update dropdown states
    document.querySelectorAll('.dropdown-item').forEach(item => {
      item.classList.toggle('active', item.dataset.tool === tool);
    });

    // Update cursor
    this.updateCursor();
    
    // Show/hide corner radius for rectangles
    const radiusRow = document.getElementById('corner-radius-row');
    if (radiusRow) {
      const selectedShape = this.getSelectedShape();
      radiusRow.style.display = (tool === 'rectangle' || selectedShape?.type === 'rectangle') ? 'block' : 'none';
    }
  }

  updateCursor() {
    const cursors = {
      select: 'default',
      hand: 'grab',
      rectangle: 'crosshair',
      ellipse: 'crosshair',
      line: 'crosshair',
      pen: 'crosshair',
      text: 'text',
    };
    this.elements.stage.style.cursor = cursors[this.state.tool] || 'default';
  }

  // Shape Management
  addShape(shape) {
    shape.id = shape.id || this.uid();
    this.state.shapes.push(shape);
    this.renderShape(shape);
    this.refreshLayers();
    this.saveToLocalStorage();
    return shape;
  }

  renderShape(shape) {
    let el = document.getElementById(shape.id);
    if (!el) {
      el = document.createElement('div');
      el.id = shape.id;
      el.className = 'shape';
      this.elements.stage.appendChild(el);
      el.addEventListener('mousedown', (e) => this.onShapeMouseDown(e, shape.id));
    }

    // Position and size
    el.style.left = shape.x + 'px';
    el.style.top = shape.y + 'px';
    el.style.width = shape.w + 'px';
    el.style.height = shape.h + 'px';

    // Appearance based on type
    if (shape.type === 'rectangle') {
      el.style.background = shape.fill || '#000000';
      el.style.borderRadius = (shape.radius || 0) + 'px';
    } else if (shape.type === 'ellipse') {
      el.style.background = shape.fill || '#000000';
      el.style.borderRadius = '9999px';
    } else if (shape.type === 'line') {
      el.style.background = 'transparent';
      el.style.borderTop = `${shape.strokeW || 2}px solid ${shape.stroke || '#000000'}`;
      el.style.height = '0px';
    } else if (shape.type === 'text') {
      el.style.background = 'transparent';
      el.style.color = shape.fill || '#000000';
      el.style.fontSize = '16px';
      el.style.fontFamily = 'Inter, sans-serif';
      el.style.padding = '4px';
      el.style.minWidth = '20px';
      el.style.minHeight = '20px';
      el.style.cursor = 'text';
      el.contentEditable = true;
      el.textContent = shape.text || 'Type here';
      this.handleTextEdit(shape, el);
    } else if (shape.type === 'arrow') {
      el.style.background = 'transparent';
      el.innerHTML = this.createArrowSVG(shape);
    } else if (shape.type === 'polygon') {
      el.style.background = 'transparent';
      el.innerHTML = this.createPolygonSVG(shape);
    } else if (shape.type === 'star') {
      el.style.background = 'transparent';
      el.innerHTML = this.createStarSVG(shape);
    } else if (shape.type === 'image') {
      el.style.background = 'transparent';
      el.style.backgroundImage = shape.src ? `url(${shape.src})` : 'none';
      el.style.backgroundSize = 'cover';
      el.style.backgroundPosition = 'center';
      el.style.border = '1px dashed #ccc';
      if (!shape.src) {
        el.innerHTML = '<div style="display:flex;align-items:center;justify-content:center;height:100%;color:#666;font-size:12px;">Drop image here</div>';
      }
    }

    // Stroke
    if (shape.strokeW > 0 && shape.type !== 'line') {
      el.style.border = `${shape.strokeW}px solid ${shape.stroke || '#000000'}`;
    }

    // Opacity
    if (shape.opacity !== undefined) {
      el.style.opacity = shape.opacity / 100;
    }

    // Rotation
    if (shape.rotation) {
      el.style.transform = `rotate(${shape.rotation}deg)`;
    }

    // Effects
    this.applyEffects(el, shape.effects || []);

    el.dataset.type = shape.type;
  }

  getShapeById(id) {
    return this.state.shapes.find(s => s.id === id);
  }

  getSelectedShape() {
    const id = [...this.state.selectedIds][0];
    return id ? this.getShapeById(id) : null;
  }

  selectOnly(id) {
    this.state.selectedIds = new Set([id]);
    this.updateSelectionUI();
    this.bindInspector();
    this.refreshLayers();
  }

  clearSelection() {
    this.state.selectedIds.clear();
    this.updateSelectionUI();
    this.bindInspector();
    this.refreshLayers();
  }

  updateSelectionUI() {
    document.querySelectorAll('.shape').forEach(el => {
      const isSelected = this.state.selectedIds.has(el.id);
      el.classList.toggle('selected', isSelected);
      this.syncHandles(el.id);
    });
  }

  syncHandles(id) {
    const el = document.getElementById(id);
    if (!el) return;
    
    this.removeHandles(el);
    if (!this.state.selectedIds.has(id)) return;

    ['nw', 'ne', 'sw', 'se'].forEach(pos => {
      const handle = document.createElement('div');
      handle.className = `handle ${pos}`;
      handle.dataset.pos = pos;
      handle.addEventListener('mousedown', (e) => this.onHandleMouseDown(e, id, pos));
      el.appendChild(handle);
    });
  }

  removeHandles(el) {
    if (el?.querySelectorAll) {
      el.querySelectorAll('.handle').forEach(h => h.remove());
    }
  }

  deleteSelected() {
    const toDelete = [...this.state.selectedIds];
    toDelete.forEach(id => {
      const index = this.state.shapes.findIndex(s => s.id === id);
      if (index !== -1) {
        this.state.shapes.splice(index, 1);
        const el = document.getElementById(id);
        if (el) el.remove();
      }
    });
    this.clearSelection();
    this.refreshLayers();
    this.saveToLocalStorage();
  }

  // Event Handlers
  onStageMouseDown(e) {
    if (e.target !== this.elements.stage) return;

    const point = this.stagePoint(e);
    
    if (this.state.tool === 'select') {
      this.clearSelection();
    } else if (this.state.tool === 'text') {
      this.createTextShape(point);
    } else if (this.state.tool === 'comment') {
      this.createComment(point);
    } else if (['rectangle', 'ellipse', 'line', 'arrow', 'polygon', 'star'].includes(this.state.tool)) {
      const shape = {
        type: this.state.tool,
        x: point.x,
        y: point.y,
        w: this.state.tool === 'line' ? 100 : (this.state.tool === 'star' ? 60 : 50),
        h: this.state.tool === 'line' ? 0 : (this.state.tool === 'star' ? 60 : 50),
        fill: ['arrow', 'polygon', 'star'].includes(this.state.tool) ? '#000000' : '#000000',
        stroke: '#000000',
        strokeW: this.state.tool === 'line' ? 2 : (['arrow', 'polygon', 'star'].includes(this.state.tool) ? 0 : 0),
        radius: 0,
        opacity: 100,
        rotation: 0,
        effects: [],
        text: this.state.tool === 'text' ? 'Type here' : undefined,
      };
      
      this.addShape(shape);
      this.selectOnly(shape.id);
      this.state.dragging = {
        active: true,
        start: point,
        origin: { ...point },
        mode: 'draw',
        targetId: shape.id,
      };
    }
  }

  onShapeMouseDown(e, id) {
    e.stopPropagation();
    this.selectOnly(id);
    
    const point = this.stagePoint(e);
    const shape = this.getShapeById(id);
    
    this.state.dragging = {
      active: true,
      start: point,
      origin: { x: shape.x, y: shape.y },
      mode: 'move',
      targetId: id,
    };
  }

  onHandleMouseDown(e, id, pos) {
    e.stopPropagation();
    this.selectOnly(id);
    
    const point = this.stagePoint(e);
    this.state.dragging = {
      active: true,
      start: point,
      origin: point,
      mode: 'resize:' + pos,
      targetId: id,
    };
  }

  onMouseMove(e) {
    if (!this.state.dragging.active) return;
    
    const shape = this.getShapeById(this.state.dragging.targetId);
    if (!shape) return;

    const point = this.stagePoint(e);
    
    if (this.state.dragging.mode === 'move') {
      const dx = point.x - this.state.dragging.start.x;
      const dy = point.y - this.state.dragging.start.y;
      shape.x = Math.round(this.state.dragging.origin.x + dx);
      shape.y = Math.round(this.state.dragging.origin.y + dy);
    } else if (this.state.dragging.mode === 'draw') {
      if (shape.type === 'line') {
        const dx = point.x - this.state.dragging.start.x;
        const dy = point.y - this.state.dragging.start.y;
        shape.w = Math.max(1, Math.abs(dx));
        shape.rotation = Math.atan2(dy, dx) * (180 / Math.PI);
      } else {
        shape.w = Math.max(1, Math.round(point.x - this.state.dragging.start.x));
        shape.h = Math.max(1, Math.round(point.y - this.state.dragging.start.y));
      }
    } else if (this.state.dragging.mode.startsWith('resize:')) {
      const pos = this.state.dragging.mode.split(':')[1];
      const right = shape.x + shape.w;
      const bottom = shape.y + shape.h;
      
      if (pos.includes('n')) {
        shape.y = Math.min(point.y, bottom - 1);
        shape.h = bottom - shape.y;
      }
      if (pos.includes('s')) {
        shape.h = Math.max(1, point.y - shape.y);
      }
      if (pos.includes('w')) {
        shape.x = Math.min(point.x, right - 1);
        shape.w = right - shape.x;
      }
      if (pos.includes('e')) {
        shape.w = Math.max(1, point.x - shape.x);
      }
    }

    this.renderShape(shape);
    this.selectOnly(shape.id);
  }

  onMouseUp() {
    this.state.dragging.active = false;
  }

  onViewportWheel(e) {
    if (e.ctrlKey || e.metaKey) {
      // Zoom
      e.preventDefault();
      const delta = e.deltaY > 0 ? -0.1 : 0.1;
      this.setZoom(this.state.zoom + delta);
    }
    // Allow normal scrolling otherwise
  }

  onViewportMouseDown(e) {
    if (this.state.tool === 'hand' || (e.button === 1)) { // Middle mouse button
      e.preventDefault();
      this.startPanning(e);
    }
  }

  onKeyDown(e) {
    const meta = e.metaKey || e.ctrlKey;
    
    // Command palette
    if ((meta && e.key.toLowerCase() === 'k') || e.key === '/') {
      e.preventDefault();
      this.togglePalette(true);
      return;
    }
    
    // Close palette
    if (e.key === 'Escape') {
      if (!this.elements.palette.classList.contains('hidden')) {
        this.togglePalette(false);
      } else {
        this.clearSelection();
      }
      return;
    }
    
    // Delete selected
    if ((e.key === 'Delete' || e.key === 'Backspace') && this.state.selectedIds.size > 0) {
      e.preventDefault();
      this.deleteSelected();
      return;
    }
    
    // Tool shortcuts
    const toolMap = {
      'v': 'select',
      'h': 'hand',
      'r': 'rectangle',
      'o': 'ellipse',
      'l': 'line',
      't': 'text',
      'p': 'pen',
      'f': 'frame',
    };
    
    const key = e.key.toLowerCase();
    if (toolMap[key] && !e.metaKey && !e.ctrlKey && !e.altKey) {
      e.preventDefault();
      this.setTool(toolMap[key]);
      return;
    }
    
    // Zoom shortcuts
    if (meta) {
      if (e.key === '+' || e.key === '=') {
        e.preventDefault();
        this.setZoom(this.state.zoom + 0.1);
      } else if (e.key === '-') {
        e.preventDefault();
        this.setZoom(this.state.zoom - 0.1);
      } else if (e.key === '0') {
        e.preventDefault();
        this.setZoom(1);
      }
    }
  }

  // Zoom and Pan
  setZoom(zoom) {
    this.state.zoom = Math.min(5, Math.max(0.1, zoom));
    this.elements.stageWrapper.style.transform = `scale(${this.state.zoom})`;
    this.updateZoomDisplay();
    this.updateRulers();
  }

  updateZoomDisplay() {
    const zoomText = Math.round(this.state.zoom * 100) + '%';
    this.elements.zoomDisplay.textContent = zoomText;
    if (this.elements.floatingZoomDisplay) {
      this.elements.floatingZoomDisplay.textContent = zoomText;
    }
  }

  startPanning(e) {
    const startX = e.clientX;
    const startY = e.clientY;
    const startScrollLeft = this.elements.viewport.scrollLeft;
    const startScrollTop = this.elements.viewport.scrollTop;
    
    const onMouseMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      this.elements.viewport.scrollLeft = startScrollLeft - dx;
      this.elements.viewport.scrollTop = startScrollTop - dy;
    };
    
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  }

  // UI Updates
  toggleRulers() {
    this.state.showRulers = !this.state.showRulers;
    this.elements.rulerTop.classList.toggle('hidden', !this.state.showRulers);
    this.elements.rulerLeft.classList.toggle('hidden', !this.state.showRulers);
  }

  togglePalette(open) {
    const isHidden = this.elements.palette.classList.contains('hidden');
    if (open === undefined) open = isHidden;
    
    this.elements.palette.classList.toggle('hidden', !open);
    if (open) {
      this.elements.paletteInput.focus();
    }
  }

  drawRulers() {
    const step = 50;
    
    // Top ruler
    this.elements.rulerTop.innerHTML = '';
    const topInner = document.createElement('div');
    topInner.style.cssText = 'display: flex; height: 100%; position: relative;';
    
    for (let i = 0; i < 400; i++) {
      const tick = document.createElement('div');
      tick.style.cssText = `width: ${step}px; border-right: 1px solid var(--border); position: relative; flex-shrink: 0;`;
      
      if (i % 2 === 0) {
        const label = document.createElement('div');
        label.textContent = (i * step).toString();
        label.style.cssText = 'position: absolute; left: 2px; bottom: 2px; font-size: 9px; opacity: 0.7; pointer-events: none;';
        tick.appendChild(label);
      }
      
      topInner.appendChild(tick);
    }
    this.elements.rulerTop.appendChild(topInner);
    
    // Left ruler
    this.elements.rulerLeft.innerHTML = '';
    const leftInner = document.createElement('div');
    leftInner.style.cssText = 'position: relative;';
    
    for (let i = 0; i < 400; i++) {
      const tick = document.createElement('div');
      tick.style.cssText = `height: ${step}px; border-bottom: 1px solid var(--border); position: relative;`;
      
      if (i % 2 === 0) {
        const label = document.createElement('div');
        label.textContent = (i * step).toString();
        label.style.cssText = 'position: absolute; right: 2px; top: 2px; font-size: 9px; opacity: 0.7; pointer-events: none; transform: rotate(-90deg); transform-origin: right top;';
        tick.appendChild(label);
      }
      
      leftInner.appendChild(tick);
    }
    this.elements.rulerLeft.appendChild(leftInner);
  }

  updateRulers() {
    if (!this.state.showRulers) return;
    
    const scrollLeft = this.elements.viewport.scrollLeft;
    const scrollTop = this.elements.viewport.scrollTop;
    
    if (this.elements.rulerTop.firstChild) {
      this.elements.rulerTop.firstChild.style.transform = `translateX(${-scrollLeft}px)`;
    }
    if (this.elements.rulerLeft.firstChild) {
      this.elements.rulerLeft.firstChild.style.transform = `translateY(${-scrollTop}px)`;
    }
  }

  // Inspector
  bindInspector() {
    const shape = this.getSelectedShape();
    
    // Update selected name
    if (this.elements.selectedName) {
      this.elements.selectedName.textContent = shape ? 
        `${shape.type.charAt(0).toUpperCase() + shape.type.slice(1)}` : 
        'Nothing selected';
    }
    
    // Enable/disable inputs
    Object.values(this.inspectorInputs).forEach(input => {
      if (input) input.disabled = !shape;
    });
    
    // Refresh effects and exports
    this.refreshEffects();
    
    if (!shape) return;
    
    // Populate values
    if (this.inspectorInputs.x) this.inspectorInputs.x.value = Math.round(shape.x);
    if (this.inspectorInputs.y) this.inspectorInputs.y.value = Math.round(shape.y);
    if (this.inspectorInputs.w) this.inspectorInputs.w.value = Math.round(shape.w);
    if (this.inspectorInputs.h) this.inspectorInputs.h.value = Math.round(shape.h);
    if (this.inspectorInputs.fill) this.inspectorInputs.fill.value = this.toHex(shape.fill || '#000000');
    if (this.inspectorInputs.stroke) this.inspectorInputs.stroke.value = this.toHex(shape.stroke || '#000000');
    if (this.inspectorInputs.strokeW) this.inspectorInputs.strokeW.value = shape.strokeW || 0;
    if (this.inspectorInputs.radius) this.inspectorInputs.radius.value = shape.radius || 0;
    if (this.inspectorInputs.opacity) this.inspectorInputs.opacity.value = shape.opacity || 100;
    if (this.inspectorInputs.rotation) this.inspectorInputs.rotation.value = shape.rotation || 0;
    
    // Show/hide relevant controls
    const radiusRow = document.getElementById('corner-radius-row');
    if (radiusRow) {
      radiusRow.style.display = shape.type === 'rectangle' ? 'block' : 'none';
    }
  }

  updateSelectedShape() {
    const shape = this.getSelectedShape();
    if (!shape) return;
    
    // Update shape properties from inspector
    if (this.inspectorInputs.x) shape.x = Number(this.inspectorInputs.x.value) || 0;
    if (this.inspectorInputs.y) shape.y = Number(this.inspectorInputs.y.value) || 0;
    if (this.inspectorInputs.w) shape.w = Math.max(1, Number(this.inspectorInputs.w.value) || 1);
    if (this.inspectorInputs.h) shape.h = Math.max(1, Number(this.inspectorInputs.h.value) || 1);
    if (this.inspectorInputs.fill) shape.fill = this.inspectorInputs.fill.value;
    if (this.inspectorInputs.stroke) shape.stroke = this.inspectorInputs.stroke.value;
    if (this.inspectorInputs.strokeW) shape.strokeW = Math.max(0, Number(this.inspectorInputs.strokeW.value) || 0);
    if (this.inspectorInputs.radius) shape.radius = Math.max(0, Number(this.inspectorInputs.radius.value) || 0);
    if (this.inspectorInputs.opacity) shape.opacity = Math.max(0, Math.min(100, Number(this.inspectorInputs.opacity.value) || 100));
    if (this.inspectorInputs.rotation) shape.rotation = Number(this.inspectorInputs.rotation.value) || 0;
    
    this.renderShape(shape);
    this.selectOnly(shape.id);
  }

  toHex(color) {
    if (color.startsWith('#')) return color;
    const ctx = document.createElement('canvas').getContext('2d');
    ctx.fillStyle = color;
    return ctx.fillStyle;
  }

  // Layers Panel
  refreshLayers() {
    if (!this.elements.layersList) return;
    
    this.elements.layersList.innerHTML = '';
    
    // Show shapes in reverse order (top to bottom)
    [...this.state.shapes].reverse().forEach(shape => {
      const li = document.createElement('li');
      li.className = 'layer-item';
      if (this.state.selectedIds.has(shape.id)) {
        li.classList.add('selected');
      }
      
      li.innerHTML = `
        <div class="layer-content">
          <span class="layer-icon">${this.getShapeIcon(shape.type)}</span>
          <span class="layer-name">${shape.type.charAt(0).toUpperCase() + shape.type.slice(1)} ${shape.id}</span>
        </div>
      `;
      
      li.addEventListener('click', () => this.selectOnly(shape.id));
      this.elements.layersList.appendChild(li);
    });
  }

  getShapeIcon(type) {
    const icons = {
      rectangle: '▭',
      ellipse: '◯',
      line: '/',
      arrow: '↗',
      polygon: '⬡',
      star: '★',
      text: 'T',
      frame: '▦',
      group: '⬢',
      image: '🖼',
    };
    return icons[type] || '◯';
  }

  // Effects System
  addEffect() {
    const shape = this.getSelectedShape();
    if (!shape) return;

    const effect = {
      id: this.uid(),
      type: 'drop-shadow',
      x: 0,
      y: 4,
      blur: 4,
      spread: 0,
      color: '#000000',
      opacity: 25,
      visible: true
    };

    if (!shape.effects) shape.effects = [];
    shape.effects.push(effect);
    this.renderShape(shape);
    this.refreshEffects();
  }

  refreshEffects() {
    if (!this.elements.effectsList) return;
    
    const shape = this.getSelectedShape();
    this.elements.effectsList.innerHTML = '';
    
    if (!shape || !shape.effects) return;

    shape.effects.forEach(effect => {
      const effectEl = this.createEffectElement(effect, shape);
      this.elements.effectsList.appendChild(effectEl);
    });
  }

  createEffectElement(effect, shape) {
    const div = document.createElement('div');
    div.className = 'effect-item';
    div.innerHTML = `
      <div class="effect-header">
        <input type="checkbox" ${effect.visible ? 'checked' : ''} class="effect-visible" data-effect-id="${effect.id}">
        <select class="effect-type" data-effect-id="${effect.id}">
          <option value="drop-shadow" ${effect.type === 'drop-shadow' ? 'selected' : ''}>Drop shadow</option>
        </select>
        <button class="btn icon small effect-remove" data-effect-id="${effect.id}" title="Remove effect">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
      <div class="effect-row">
        <div class="effect-control">
          <label>X</label>
          <input type="number" value="${effect.x}" class="effect-x" data-effect-id="${effect.id}">
        </div>
        <div class="effect-control">
          <label>Y</label>
          <input type="number" value="${effect.y}" class="effect-y" data-effect-id="${effect.id}">
        </div>
        <div class="effect-control">
          <label>Blur</label>
          <input type="number" value="${effect.blur}" min="0" class="effect-blur" data-effect-id="${effect.id}">
        </div>
        <div class="effect-control">
          <label>Spread</label>
          <input type="number" value="${effect.spread}" class="effect-spread" data-effect-id="${effect.id}">
        </div>
      </div>
      <div class="effect-footer">
        <div class="color-control">
          <div class="color-swatch" style="background: ${effect.color}" data-effect-id="${effect.id}"></div>
          <input type="text" value="${effect.color}" class="effect-color" data-effect-id="${effect.id}">
        </div>
        <div class="opacity-control">
          <input type="number" value="${effect.opacity}" min="0" max="100" class="effect-opacity" data-effect-id="${effect.id}">
          <span>%</span>
        </div>
      </div>
    `;

    // Add event listeners
    div.addEventListener('change', (e) => this.updateEffect(e, shape));
    div.addEventListener('input', (e) => this.updateEffect(e, shape));
    div.addEventListener('click', (e) => {
      if (e.target.classList.contains('effect-remove')) {
        this.removeEffect(e.target.dataset.effectId, shape);
      }
    });

    return div;
  }

  updateEffect(e, shape) {
    const effectId = e.target.dataset.effectId;
    if (!effectId) return;

    const effect = shape.effects.find(eff => eff.id === effectId);
    if (!effect) return;

    if (e.target.classList.contains('effect-visible')) {
      effect.visible = e.target.checked;
    } else if (e.target.classList.contains('effect-x')) {
      effect.x = Number(e.target.value) || 0;
    } else if (e.target.classList.contains('effect-y')) {
      effect.y = Number(e.target.value) || 0;
    } else if (e.target.classList.contains('effect-blur')) {
      effect.blur = Math.max(0, Number(e.target.value) || 0);
    } else if (e.target.classList.contains('effect-spread')) {
      effect.spread = Number(e.target.value) || 0;
    } else if (e.target.classList.contains('effect-color')) {
      effect.color = e.target.value;
      const swatch = e.target.parentElement.querySelector('.color-swatch');
      if (swatch) swatch.style.background = e.target.value;
    } else if (e.target.classList.contains('effect-opacity')) {
      effect.opacity = Math.max(0, Math.min(100, Number(e.target.value) || 0));
    }

    this.renderShape(shape);
  }

  removeEffect(effectId, shape) {
    const index = shape.effects.findIndex(eff => eff.id === effectId);
    if (index !== -1) {
      shape.effects.splice(index, 1);
      this.renderShape(shape);
      this.refreshEffects();
    }
  }

  applyEffects(element, effects) {
    if (!effects || effects.length === 0) {
      element.style.filter = '';
      return;
    }

    const filters = effects
      .filter(effect => effect.visible)
      .map(effect => {
        if (effect.type === 'drop-shadow') {
          const r = parseInt(effect.color.slice(1, 3), 16);
          const g = parseInt(effect.color.slice(3, 5), 16);
          const b = parseInt(effect.color.slice(5, 7), 16);
          const rgba = `rgba(${r}, ${g}, ${b}, ${effect.opacity / 100})`;
          return `drop-shadow(${effect.x}px ${effect.y}px ${effect.blur}px ${rgba})`;
        }
        return '';
      })
      .filter(f => f);

    element.style.filter = filters.join(' ');
  }

  // Export System
  addExport() {
    const exportId = this.uid();
    const exportItem = this.createExportElement(exportId);
    this.elements.exportList.appendChild(exportItem);
  }

  createExportElement(exportId) {
    const div = document.createElement('div');
    div.className = 'export-item';
    div.innerHTML = `
      <div class="export-controls">
        <input type="text" value="1x" class="scale-input" data-export-id="${exportId}">
        <select class="format-select" data-export-id="${exportId}">
          <option value="PNG">PNG</option>
          <option value="JPG">JPG</option>
          <option value="SVG">SVG</option>
        </select>
        <button class="export-button" data-export-id="${exportId}">Export</button>
        <button class="btn icon small export-remove" data-export-id="${exportId}" title="Remove export">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus-icon lucide-minus"><path d="M5 12h14"/></svg>
        </button>
        <button class="btn icon small export-remove" data-export-id="${exportId}" title="Remove">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ellipsis-icon lucide-ellipsis"><circle cx="12" cy="12" r="1"/><circle cx="19" cy="12" r="1"/><circle cx="5" cy="12" r="1"/></svg>
        </button>
      </div>
      <div class="export-preview">
        <div class="export-preview-header">
          <span>Preview</span>
          <span class="export-dimensions">200 × 150</span>
        </div>
        <div class="export-preview-canvas" id="export-canvas-${exportId}">
          <div class="export-preview-content">Canvas Preview</div>
        </div>
      </div>
    `;

    // Add event listeners
    div.addEventListener('click', (e) => {
      if (e.target.classList.contains('export-button')) {
        this.exportCanvas(e.target.dataset.exportId);
      } else if (e.target.classList.contains('export-remove')) {
        div.remove();
      }
    });

    // Update preview
    this.updateExportPreview(exportId);
    
    return div;
  }

  updateExportPreview(exportId) {
    const canvas = document.getElementById(`export-canvas-${exportId}`);
    if (!canvas) return;

    // Create a visual representation of the current canvas
    const shapes = this.state.shapes;
    if (shapes.length === 0) {
      canvas.innerHTML = '<div class="export-preview-content">No shapes to export</div>';
      return;
    }

    // Calculate canvas bounds
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    shapes.forEach(shape => {
      minX = Math.min(minX, shape.x);
      minY = Math.min(minY, shape.y);
      maxX = Math.max(maxX, shape.x + shape.w);
      maxY = Math.max(maxY, shape.y + shape.h);
    });

    const canvasWidth = maxX - minX;
    const canvasHeight = maxY - minY;
    
    // Update dimensions display
    const dimensionsEl = canvas.parentElement.querySelector('.export-dimensions');
    if (dimensionsEl) {
      dimensionsEl.textContent = `${Math.round(canvasWidth)} × ${Math.round(canvasHeight)}`;
    }

    // Create preview
    canvas.innerHTML = '';
    canvas.style.position = 'relative';
    
    shapes.forEach(shape => {
      const shapeEl = document.createElement('div');
      shapeEl.style.position = 'absolute';
      shapeEl.style.left = `${((shape.x - minX) / canvasWidth) * 100}%`;
      shapeEl.style.top = `${((shape.y - minY) / canvasHeight) * 100}%`;
      shapeEl.style.width = `${(shape.w / canvasWidth) * 100}%`;
      shapeEl.style.height = `${(shape.h / canvasHeight) * 100}%`;
      
      if (shape.type === 'rectangle') {
        shapeEl.style.background = shape.fill || '#000';
        shapeEl.style.borderRadius = `${shape.radius || 0}px`;
      } else if (shape.type === 'ellipse') {
        shapeEl.style.background = shape.fill || '#000';
        shapeEl.style.borderRadius = '50%';
      } else if (shape.type === 'line') {
        shapeEl.style.background = 'transparent';
        shapeEl.style.borderTop = `2px solid ${shape.stroke || '#000'}`;
        shapeEl.style.height = '0';
      }
      
      if (shape.strokeW > 0 && shape.type !== 'line') {
        shapeEl.style.border = `1px solid ${shape.stroke || '#000'}`;
      }
      
      shapeEl.style.opacity = (shape.opacity || 100) / 100;
      
      canvas.appendChild(shapeEl);
    });
  }

  exportCanvas(exportId) {
    // Create a proper canvas export
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    // Calculate canvas bounds
    const shapes = this.state.shapes;
    if (shapes.length === 0) return;

    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    shapes.forEach(shape => {
      minX = Math.min(minX, shape.x);
      minY = Math.min(minY, shape.y);
      maxX = Math.max(maxX, shape.x + shape.w);
      maxY = Math.max(maxY, shape.y + shape.h);
    });

    const canvasWidth = maxX - minX;
    const canvasHeight = maxY - minY;
    
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    
    // Clear canvas
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    
    // Draw shapes
    shapes.forEach(shape => {
      ctx.save();
      
      const x = shape.x - minX;
      const y = shape.y - minY;
      
      ctx.globalAlpha = (shape.opacity || 100) / 100;
      
      if (shape.type === 'rectangle') {
        ctx.fillStyle = shape.fill || '#000000';
        if (shape.radius > 0) {
          this.drawRoundedRect(ctx, x, y, shape.w, shape.h, shape.radius);
        } else {
          ctx.fillRect(x, y, shape.w, shape.h);
        }
        
        if (shape.strokeW > 0) {
          ctx.strokeStyle = shape.stroke || '#000000';
          ctx.lineWidth = shape.strokeW;
          if (shape.radius > 0) {
            this.drawRoundedRect(ctx, x, y, shape.w, shape.h, shape.radius);
            ctx.stroke();
          } else {
            ctx.strokeRect(x, y, shape.w, shape.h);
          }
        }
      } else if (shape.type === 'ellipse') {
        ctx.fillStyle = shape.fill || '#000000';
        ctx.beginPath();
        ctx.ellipse(x + shape.w/2, y + shape.h/2, shape.w/2, shape.h/2, 0, 0, 2 * Math.PI);
        ctx.fill();
        
        if (shape.strokeW > 0) {
          ctx.strokeStyle = shape.stroke || '#000000';
          ctx.lineWidth = shape.strokeW;
          ctx.stroke();
        }
      } else if (shape.type === 'line') {
        ctx.strokeStyle = shape.stroke || '#000000';
        ctx.lineWidth = shape.strokeW || 2;
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + shape.w, y);
        ctx.stroke();
      }
      
      ctx.restore();
    });
    
    // Download the image
    canvas.toBlob((blob) => {
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'figma-export.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
    }, 'image/png');
  }

  drawRoundedRect(ctx, x, y, width, height, radius) {
    ctx.beginPath();
    ctx.moveTo(x + radius, y);
    ctx.arcTo(x + width, y, x + width, y + height, radius);
    ctx.arcTo(x + width, y + height, x, y + height, radius);
    ctx.arcTo(x, y + height, x, y, radius);
    ctx.arcTo(x, y, x + width, y, radius);
    ctx.closePath();
    ctx.fill();
  }

  // Shape Creation Methods
  createTextShape(point) {
    const shape = {
      type: 'text',
      x: point.x,
      y: point.y,
      w: 100,
      h: 30,
      fill: '#000000',
      stroke: '#000000',
      strokeW: 0,
      radius: 0,
      opacity: 100,
      rotation: 0,
      effects: [],
      text: 'Type here',
    };
    
    this.addShape(shape);
    this.selectOnly(shape.id);
    
    // Focus the text element for immediate editing
    setTimeout(() => {
      const el = document.getElementById(shape.id);
      if (el && el.contentEditable) {
        el.focus();
        el.select();
      }
    }, 50);
  }

  createComment(point) {
    const comment = {
      id: this.uid(),
      type: 'comment',
      x: point.x,
      y: point.y,
      text: '',
      timestamp: new Date().toISOString(),
    };
    
    this.state.comments = this.state.comments || [];
    this.state.comments.push(comment);
    this.renderComment(comment);
    this.saveToLocalStorage();
  }

  renderComment(comment) {
    const el = document.createElement('div');
    el.id = comment.id;
    el.className = 'comment';
    el.style.position = 'absolute';
    el.style.left = comment.x + 'px';
    el.style.top = comment.y + 'px';
    el.innerHTML = `
      <div class="comment-icon">💬</div>
      <div class="comment-popup">
        <textarea placeholder="Add a comment..." class="comment-input">${comment.text || ''}</textarea>
        <div class="comment-actions">
          <button class="btn small" onclick="window.figmaClone.saveComment('${comment.id}')">Save</button>
          <button class="btn small" onclick="window.figmaClone.deleteComment('${comment.id}')">Delete</button>
        </div>
      </div>
    `;
    
    this.elements.stage.appendChild(el);
  }

  saveComment(commentId) {
    const comment = this.state.comments.find(c => c.id === commentId);
    const el = document.getElementById(commentId);
    if (comment && el) {
      const textarea = el.querySelector('.comment-input');
      comment.text = textarea.value;
      this.saveToLocalStorage();
      el.classList.remove('editing');
    }
  }

  deleteComment(commentId) {
    const index = this.state.comments.findIndex(c => c.id === commentId);
    if (index !== -1) {
      this.state.comments.splice(index, 1);
      const el = document.getElementById(commentId);
      if (el) el.remove();
      this.saveToLocalStorage();
    }
  }

  createArrowSVG(shape) {
    return `<svg width="100%" height="100%" viewBox="0 0 ${shape.w} ${shape.h}">
      <defs>
        <marker id="arrowhead-${shape.id}" markerWidth="10" markerHeight="7" 
                refX="9" refY="3.5" orient="auto">
          <polygon points="0 0, 10 3.5, 0 7" fill="${shape.fill || '#000000'}" />
        </marker>
      </defs>
      <line x1="0" y1="${shape.h/2}" x2="${shape.w-10}" y2="${shape.h/2}" 
            stroke="${shape.fill || '#000000'}" stroke-width="${shape.strokeW || 2}" 
            marker-end="url(#arrowhead-${shape.id})" />
    </svg>`;
  }

  createPolygonSVG(shape) {
    const cx = shape.w / 2;
    const cy = shape.h / 2;
    const r = Math.min(shape.w, shape.h) / 2 - 5;
    const points = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i * 60 - 90) * Math.PI / 180;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return `<svg width="100%" height="100%" viewBox="0 0 ${shape.w} ${shape.h}">
      <polygon points="${points.join(' ')}" 
               fill="${shape.fill || '#000000'}" 
               stroke="${shape.stroke || '#000000'}" 
               stroke-width="${shape.strokeW || 0}" />
    </svg>`;
  }

  createStarSVG(shape) {
    const cx = shape.w / 2;
    const cy = shape.h / 2;
    const outerR = Math.min(shape.w, shape.h) / 2 - 5;
    const innerR = outerR * 0.4;
    const points = [];
    for (let i = 0; i < 10; i++) {
      const angle = (i * 36 - 90) * Math.PI / 180;
      const r = i % 2 === 0 ? outerR : innerR;
      const x = cx + r * Math.cos(angle);
      const y = cy + r * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return `<svg width="100%" height="100%" viewBox="0 0 ${shape.w} ${shape.h}">
      <polygon points="${points.join(' ')}" 
               fill="${shape.fill || '#000000'}" 
               stroke="${shape.stroke || '#000000'}" 
               stroke-width="${shape.strokeW || 0}" />
    </svg>`;
  }

  // Image Handling
  setupImageHandling() {
    // Set up drag and drop for images
    this.elements.stage.addEventListener('dragover', (e) => {
      e.preventDefault();
      e.dataTransfer.dropEffect = 'copy';
    });

    this.elements.stage.addEventListener('drop', (e) => {
      e.preventDefault();
      const files = Array.from(e.dataTransfer.files);
      const imageFiles = files.filter(file => file.type.startsWith('image/'));
      
      if (imageFiles.length > 0) {
        const rect = this.elements.stage.getBoundingClientRect();
        const x = (e.clientX - rect.left) / this.state.zoom;
        const y = (e.clientY - rect.top) / this.state.zoom;
        this.handleImageUpload(imageFiles[0], { x, y });
      }
    });

    // Set up paste for images
    document.addEventListener('paste', (e) => {
      if (e.target.closest('.stage')) {
        const items = Array.from(e.clipboardData.items);
        const imageItem = items.find(item => item.type.startsWith('image/'));
        
        if (imageItem) {
          e.preventDefault();
          const file = imageItem.getAsFile();
          this.handleImageUpload(file, { x: 100, y: 100 });
        }
      }
    });

    // Set up image button click
    const imageBtn = document.querySelector('[data-tool="image"]');
    if (imageBtn) {
      imageBtn.addEventListener('click', (e) => {
        if (this.state.tool === 'image') {
          e.stopPropagation();
          this.openImageFilePicker();
        }
      });
    }
  }

  openImageFilePicker() {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
    input.onchange = (e) => {
      const file = e.target.files[0];
      if (file) {
        this.handleImageUpload(file, { x: 100, y: 100 });
      }
    };
    input.click();
  }

  handleImageUpload(file, position) {
    const reader = new FileReader();
    reader.onload = (e) => {
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.width / img.height;
        const maxSize = 200;
        let w = img.width;
        let h = img.height;
        
        if (w > maxSize || h > maxSize) {
          if (w > h) {
            w = maxSize;
            h = w / aspectRatio;
          } else {
            h = maxSize;
            w = h * aspectRatio;
          }
        }

        const shape = {
          type: 'image',
          x: position.x,
          y: position.y,
          w: w,
          h: h,
          fill: '#000000',
          stroke: '#000000',
          strokeW: 0,
          radius: 0,
          opacity: 100,
          rotation: 0,
          effects: [],
          src: e.target.result,
        };
        
        this.addShape(shape);
        this.selectOnly(shape.id);
        this.saveToLocalStorage();
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  }

  // Text editing
  handleTextEdit(shape, element) {
    if (shape.type !== 'text') return;
    
    element.addEventListener('input', () => {
      shape.text = element.textContent;
      this.saveToLocalStorage();
    });
    
    element.addEventListener('blur', () => {
      if (!element.textContent.trim()) {
        element.textContent = 'Type here';
        shape.text = 'Type here';
      }
      this.saveToLocalStorage();
    });
  }

  // LocalStorage
  saveToLocalStorage() {
    const data = {
      shapes: this.state.shapes,
      comments: this.state.comments || [],
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('figmaClone', JSON.stringify(data));
  }

  loadFromLocalStorage() {
    try {
      const data = localStorage.getItem('figmaClone');
      if (data) {
        const parsed = JSON.parse(data);
        this.state.shapes = parsed.shapes || [];
        this.state.comments = parsed.comments || [];
        
        // Render all shapes
        this.state.shapes.forEach(shape => this.renderShape(shape));
        
        // Render all comments
        (this.state.comments || []).forEach(comment => this.renderComment(comment));
        
        this.refreshLayers();
      } else {
        this.loadSampleData();
      }
    } catch (error) {
      console.error('Error loading from localStorage:', error);
      this.loadSampleData();
    }
  }

  // Sample Data
  loadSampleData() {
    // Add a sample rectangle to demonstrate the system
    const sampleShape = {
      type: 'rectangle',
      x: 100,
      y: 100,
      w: 200,
      h: 150,
      fill: '#0969da',
      stroke: '#000000',
      strokeW: 0,
      radius: 8,
      opacity: 100,
      rotation: 0,
      effects: [],
    };
    
    this.addShape(sampleShape);
    this.selectOnly(sampleShape.id);
    this.saveToLocalStorage();
  }
}

// Initialize the application
document.addEventListener('DOMContentLoaded', () => {
  window.figmaClone = new FigmaClone();
});

// Mark todos as completed
const completedTodos = [
  'command_palette', 'toolbar', 'draw_shapes', 'select_move_resize', 
  'inspector', 'layers_panel', 'zoom_rulers', 'collapsible_sidebars',
  'infinite_canvas', 'fix_scrolling', 'toolbar_dropdowns', 'enhanced_layers',
  'more_shapes', 'enhanced_inspector'
];