
//the globals ========
e_mousemove = null



// ==================dynatip related===========
const colorThief = new ColorThief(); // Instantiate ColorThief
let dynatip_color_accuracy = 25;
let TipGap = 5;
let TipDelayTime = 300;
let tippyInstance = null; // Global variable to hold the single Tippy instance
let lastHoveredElement = null; // Keep track of the last hovered element
let hoverTimer = null; // Timer for the hover delay



//=================dynamic events================

// Global event handler object
const G = {
  // Store event configurations
  eventConfigs: {},

  // Initialize the event handler
  init: function() {
    // List of events to handle
    const events = ['pointerdown', 'click', 'mousemove', 'touchstart', 'mouseenter', 'mouseleave', 'focus', 'blur'];
    
    events.forEach(eventType => {
      document.addEventListener(eventType, this.e.bind(this), true);
    });
  },

  // Handle events
  e: function(event) {
    const config = this.eventConfigs[event.type];
    if (!config) return;

    for (const selector in config) {
      try {
        if (event.target.closest(selector)) {
          config[selector](event);
        }
        
      } catch (error) {
        return;
      }
    }
  },

  // Add event configuration
  add: function(eventType, selector, callback) {
    if (!this.eventConfigs[eventType]) {
      this.eventConfigs[eventType] = {};
    }
    this.eventConfigs[eventType][selector] = callback;
  }
};

// Initialize the global event handler
G.init();

// Follow mouse all time (for the zchat)
G.add('mousemove', 'body', function(event) {
  let zoomLevel = getZoomLevel();
  let adjustedX = event.clientX / zoomLevel;
  let adjustedY = event.clientY / zoomLevel;

  e_mousemove = [adjustedX, adjustedY];
});


// Usage example
G.add('pointerdown', '#tutos', function(event) {
  const zoomLevel = getZoomLevel();
  const adjustedX = event.clientX / zoomLevel;
  const adjustedY = event.clientY / zoomLevel;

  // Check if the clicked element is a child of an element with the 'tile' class
  const tileElement = event.target.closest('#tutos');
  if (tileElement) {
      const rainAttribute = tileElement.getAttribute('rain');
      createRain(adjustedX, adjustedY, rainAttribute);
  }
});
//--------------------


//--------tooltip mousenter----
G.add('mouseenter', '[tip]', function(event) {
  const target = event.target;
  const parentWithTip = findParentWithTip(target);
  console.log(target);

  if (parentWithTip) {
     steal(target.querySelector(`img`))
    // Clear any existing timer
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }

    // Set a new timer
    hoverTimer = setTimeout(async () => {
      const tippyContent = createTippyContent(parentWithTip);
      const zoomLevel = getZoomLevel();
      const rect = parentWithTip.getBoundingClientRect();
      const adjustedX = rect.right / zoomLevel ;
      const adjustedY = (rect.top + rect.height / 2) / zoomLevel;


      // If the Tippy instance doesn't exist, create it on the parentWithTip element
      if (!tippyInstance) {
        tippyInstance = tippy(document.body, {
          content: tippyContent,
          trigger: 'manual',
          placement: 'right',
          theme: 'dynatip',
          arrow: true,
          followCursor: false,
        });
      }
      // Update the content of the existing Tippy instance
      tippyInstance.setContent(tippyContent);

      // Set the position of the tooltip to the initial cursor position
      tippyInstance.setProps({
        getReferenceClientRect: () => ({
          top: adjustedY,
          left: adjustedX + TipGap,
          width: 0,
          height: 0,
        }),
      });

      tippyInstance.show();
    }, TipDelayTime);
  }

});


G.add('mouseleave', '[tip]', function(event) {

const target = event.target;
const parentWithTip = findParentWithTip(target);

if (parentWithTip && tippyInstance) {
  tippyInstance.hide();
}

// Clear the timer if the mouse leaves before the delay is over
if (hoverTimer) {
  clearTimeout(hoverTimer);
  hoverTimer = null;
}
})

//for phones
document.body.addEventListener('pointerdown', () => {
  tippyInstance.hide();
});
//===============================================




const findParentWithTip = (element) => {
  let currentElement = element;
  while (currentElement) {
    if (currentElement.hasAttribute('tip')) {
      return currentElement;
    }
    currentElement = currentElement.parentElement;
  }
  return null;
};





//=================

//
//  ####  ##### ######   ##   #
// #        #   #       #  #  #
//  ####    #   #####  #    # #
//      #   #   #      ###### #
// #    #   #   #      #    # #
//  ####    #   ###### #    # ######


const steal = async (element, passToCssVar = true) => {
  let img = null;

  // Check if the element is a string (URL or file path)
  if (typeof element === 'string') {
    img = new Image();
    img.crossOrigin = 'Anonymous'; // Enable CORS if dealing with images from different origins
    img.src = element;
  } else if (element instanceof HTMLElement) {
    // Try to find an image child
    img = element.querySelector('img');
  } else {
    img = element;
  }

  if (img) {
    // If an image is found, use it directly
    await new Promise((resolve, reject) => {
      img.onload = resolve;
      img.onerror = () => reject(new Error('Failed to load image: ' + element));
    });

    const palette = colorThief.getPalette(img, 2);



    let color1 = `rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]}, 0.7)`;
    let color2 = `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]}, 0.7)`;

    if (passToCssVar) {
      // Apply the colors to the CSS variables --steal1 and --steal2
      document.documentElement.style.setProperty('--steal1', color1);
      document.documentElement.style.setProperty('--steal2', color2);
    }

    return [color1, color2]; // Return the colors directly
  } else {
    // If no image is found, use dom-to-image
    try {
      const dataUrl = await domtoimage.toPng(element, { width: dynatip_color_accuracy, height: dynatip_color_accuracy });
      img = new Image();
      img.src = dataUrl;

      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = () => reject(new Error('Failed to load image: ' + dataUrl));
      });

  
      const palette = colorThief.getPalette(img, 2);

      let color1 = `rgb(${palette[0][0]}, ${palette[0][1]}, ${palette[0][2]}, 0.7)`;
      let color2 = `rgb(${palette[1][0]}, ${palette[1][1]}, ${palette[1][2]}, 0.7)`;

      if (passToCssVar) {
        // Apply the colors to the CSS variables --steal1 and --steal2
        document.documentElement.style.setProperty('--steal1', color1);
        document.documentElement.style.setProperty('--steal2', color2);
      }

      return [color1, color2]; // Return the colors directly
    } catch (error) {
      console.error('Failed to convert element to image:', error);
      throw error;
    }
  }
};



const createTippyContent = (element) => {
  const thumb = element.getAttribute('thumb');
  const tipText = element.getAttribute('tip');
  const tipMoji = element.getAttribute('emoji') || `⚡`;

  const contentContainer = document.createElement('div');
  contentContainer.style.display = 'flex';
  contentContainer.style.flexDirection = 'column';
  contentContainer.style.alignItems = 'center';

  const ImageAndText = document.createElement('div');


  if (thumb) {
    if (Array.isArray(thumb)) {
      // Create a slideshow
      const slideshowContainer = document.createElement('div');
      slideshowContainer.style.width = '200px';
      slideshowContainer.style.height = '200px';
      slideshowContainer.style.position = 'relative';

      thumb.forEach((imgSrc, index) => {
        const img = document.createElement('img');
        img.src = imgSrc;
        img.style.width = '100%';
        img.style.height = '100%';
        img.style.position = 'absolute';
        img.style.top = '0';
        img.style.left = '0';
        img.style.opacity = index === 0 ? '1' : '0';
        img.style.transition = 'opacity 0.5s';
        slideshowContainer.appendChild(img);
      });

      setInterval(() => {
        const images = slideshowContainer.querySelectorAll('img');
        images.forEach((img, index) => {
          img.style.opacity = index === 0 ? '0' : '1';
        });
        images.forEach((img, index) => {
          img.style.opacity = index === 0 ? '1' : '0';
        });
      }, 3000);

      ImageAndText.appendChild(slideshowContainer);

    } else {
      // Create a single image
      const img = document.createElement('img');
      img.src = thumb;
      img.style.width = '100px';
      img.style.height = '100px';
      ImageAndText.appendChild(img);
    }
  }

  // Add the text below the image
  const textElement = document.createElement('div');
  textElement.textContent = tipText;
  textElement.style.marginTop = '4px';
  ImageAndText.appendChild(textElement);

  contentContainer.appendChild(ImageAndText);
  animateElement(ImageAndText, 0.5);

    // patternize

    const patternHeight = `200%`

    
    const patternElement = document.createElement('div');
    patternElement.innerHTML = `<svg version="1.1" baseProfile="full" width="110%" height="${patternHeight}">
  <pattern id="inv_pattern" width="45" height="35" patternUnits="userSpaceOnUse">
      <text class="gradient-emoji" font-size="22" x="0%" y="0%" dy="20px">${tipMoji}</text>
  </pattern>
  
  <rect width="100%" height="100%" stroke-width="0.5" fill="url(#inv_pattern)" />
  </svg>`;

  patternElement.style.zIndex = `-1`
  patternElement.style.position = `absolute`
  patternElement.style.width = `110%`
  patternElement.style.height = patternHeight
  patternElement.style.bottom = `-10px`
  patternElement.style.opacity = `40%`
  patternElement.style.filter = 'blur(1px)'; // Blur effect//animate it 

let direction = 1; // 1 for down, -1 for up
let position = 0; // current position of the element
const maxPosition = 100; // maximum position before direction flip
const speed = 0.4; // speed of animation

function animate(time) {
  position += direction * speed;

  // flip direction when position reaches maxPosition or 0
  if (position >= maxPosition || position <= 0) {
    direction *= -1;
  }

  patternElement.style.bottom = position + 'px';

  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

    
    contentContainer.appendChild(patternElement);

 
   

  return contentContainer;
};

const getAdjustedClientRect = () => {
  const zoomLevel = window.devicePixelRatio || 1; // Adjust for zoom level
  const rect = tippyInstance.reference.getBoundingClientRect();
  return {
    top: rect.top / zoomLevel,
    left: rect.left / zoomLevel + TipGap,
    bottom: rect.bottom / zoomLevel,
    right: rect.right / zoomLevel,
    width: rect.width / zoomLevel,
    height: rect.height / zoomLevel,
  };
};



//=============================================================



//rain 


function createRain(x, y, rainAttribute) {
  let rainItems;

  if (rainAttribute) {
      try {
          rainItems = JSON.parse(rainAttribute);
      } catch (e) {
          console.error('Invalid rain attribute. Using default emojis.');
          rainItems = ['🌟', '💖', '🎉', '🌈', '🍕', '🚀', '🎈', '🌺'];
      }
  } else {
      rainItems = ['🌟', '⚡', '🎉', '🌈', '🍕', '🚀', '🎈', '🔥'];
  }

  const maxElements = 10; // Reduced number of elements for better performance

  for (let i = 0; i < maxElements; i++) {
      const rainElement = document.createElement('div');
      rainElement.classList.add('rain-item');
      rainElement.style.position = 'fixed';
      rainElement.style.left = `${x}px`;
      rainElement.style.top = `${y}px`;
      rainElement.style.pointerEvents = 'none';
      rainElement.style.zIndex = '1000'; // Ensure the element is on top of all other elements

      const item = rainItems[Math.floor(Math.random() * rainItems.length)];

      if (item.startsWith('http')) {
          const img = document.createElement('img');
          img.src = item;
          img.style.width = '24px';
          img.style.height = '24px';
          img.style.objectFit = 'contain';
          rainElement.appendChild(img);
      } else {
          rainElement.textContent = item;
          rainElement.style.fontSize = '24px';
      }

      const angle = Math.random() * Math.PI * 2;
      const velocity = 2 + Math.random() * 2;
      const rotationSpeed = Math.random() * 360 - 180;

      document.body.appendChild(rainElement);

      let time = 0;
      function animate() {
          time += 1 / 60;
          const newX = x + Math.cos(angle) * velocity * time * 20;
          const newY = y + Math.sin(angle) * velocity * time * 20 + 0.5 * 98 * time * time;
          rainElement.style.transform = `translate(${newX - x}px, ${newY - y}px) rotate(${rotationSpeed * time}deg)`;
          rainElement.style.opacity = 1 - time / 2;

          if (time < 2) {
              requestAnimationFrame(animate);
          } else {
              rainElement.remove();
          }
      }
      requestAnimationFrame(animate);
  }
}

// Function to get the zoom level
function getZoomLevel() {
  const rect = document.body.getBoundingClientRect();
  return rect.width / document.body.offsetWidth;
}

function zoomElement({ selector, zoomLevel }) {
  // Get the element by its selector
  const element = document.querySelector(selector);

  if (!element) {
      console.error(`Element with selector "${selector}" not found.`);
      return;
  }

  // Calculate the current scale of the element
  const currentTransform = element.style.transform || 'scale(1)';
  const currentScale = parseFloat(currentTransform.match(/scale\(([\d.]+)\)/)?.[1] || 1);

  // Calculate the new scale
  const newScale = currentScale * zoomLevel;

  // Calculate the center of the element
  const rect = element.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;
  const centerY = rect.top + rect.height / 2;

  // Apply the new scale and adjust the position to keep the center in place
  element.style.transformOrigin = `${centerX}px ${centerY}px`;
  element.style.transform = `scale(${newScale})`;
}



//animation-------------


const animateElement = (element, durationSeconds = 1) => {
  const presets = [
    { name: 'fade', keyframes: [{ opacity: 0 }, { opacity: 1 }] },
    { name: 'slide-left', keyframes: [{ transform: 'translateX(-100%)' }, { transform: 'translateX(0)' }] },
    { name: 'slide-right', keyframes: [{ transform: 'translateX(100%)' }, { transform: 'translateX(0)' }] },
    { name: 'slide-up', keyframes: [{ transform: 'translateY(100%)' }, { transform: 'translateY(0)' }] },
    { name: 'slide-down', keyframes: [{ transform: 'translateY(-100%)' }, { transform: 'translateY(0)' }] },
    { name: 'rotate', keyframes: [{ transform: 'rotate(0deg)' }, { transform: 'rotate(360deg)' }] },
    { name: 'scale', keyframes: [{ transform: 'scale(0)' }, { transform: 'scale(1)' }] },
    { name: 'flip-x', keyframes: [{ transform: 'perspective(400px) rotateX(90deg)' }, { transform: 'perspective(400px) rotateX(0deg)' }] },
    { name: 'flip-y', keyframes: [{ transform: 'perspective(400px) rotateY(90deg)' }, { transform: 'perspective(400px) rotateY(0deg)' }] },
    { name: 'swing', keyframes: [{ transform: 'rotate(0deg)' }, { transform: 'rotate(15deg)' }, { transform: 'rotate(-10deg)' }, { transform: 'rotate(5deg)' }, { transform: 'rotate(0deg)' }] },
    { name: 'wobble', keyframes: [{ transform: 'translateX(0%)' }, { transform: 'translateX(-25%) rotate(-5deg)' }, { transform: 'translateX(20%) rotate(3deg)' }, { transform: 'translateX(-15%) rotate(-3deg)' }, { transform: 'translateX(10%) rotate(2deg)' }, { transform: 'translateX(0%)' }] },
    { name: 'pulse', keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(1.1)' }, { transform: 'scale(1)' }] },
    { name: 'shake', keyframes: [{ transform: 'translateX(0)' }, { transform: 'translateX(-10px)' }, { transform: 'translateX(10px)' }, { transform: 'translateX(-10px)' }, { transform: 'translateX(10px)' }, { transform: 'translateX(0)' }] },
    { name: 'bounce', keyframes: [{ transform: 'translateY(0)' }, { transform: 'translateY(-30px)' }, { transform: 'translateY(0)' }, { transform: 'translateY(-15px)' }, { transform: 'translateY(0)' }] },
    { name: 'flash', keyframes: [{ opacity: '1' }, { opacity: '0' }, { opacity: '1' }, { opacity: '0' }, { opacity: '1' }] },
    { name: 'rubberBand', keyframes: [{ transform: 'scale(1)' }, { transform: 'scale(1.25, 0.75)' }, { transform: 'scale(0.75, 1.25)' }, { transform: 'scale(1.15, 0.85)' }, { transform: 'scale(0.95, 1.05)' }, { transform: 'scale(1)' }] },
    { name: 'zoomIn', keyframes: [{ opacity: '0', transform: 'scale(0.3)' }, { opacity: '1', transform: 'scale(1)' }] },
    { name: 'rollIn', keyframes: [{ opacity: '0', transform: 'translateX(-100%) rotate(-120deg)' }, { opacity: '1', transform: 'translateX(0px) rotate(0deg)' }] },
  ];

  const randomPreset = presets[Math.floor(Math.random() * presets.length)];
  const animation = element.animate(randomPreset.keyframes, {
    duration: durationSeconds * 1000,
    easing: 'ease-in-out',
    fill: 'forwards'
  });

  animation.onfinish = () => {
    element.style.animation = 'none';
  };
};



//
// #####   ####  #####  #####  ###### #####        #####  ####  #   #  ####
// #    # #    # #    # #    # #      #    #         #   #    #  # #  #
// #####  #    # #    # #    # #####  #    # #####   #   #    #   #    ####
// #    # #    # #####  #    # #      #####          #   #    #   #        #
// #    # #    # #   #  #    # #      #   #          #   #    #   #   #    #
// #####   ####  #    # #####  ###### #    #         #    ####    #    ####
async function dyn_ad(options) {
  const {
    containerSelector,
    popImages,
    borderPosition = 'top',
    imageSize = 100,
    animationDelay = 100,
    slideInTime = 500,
    slideOutTime = 500,
    delayBeforeStart = 0,
    imageSpacing = 20,
    customSlideInAnim = '',
    customSlideOutAnim = '',
    extraSpacing = 0,
    delayBetweenElements = true,
    randomizeSizes = false,
    maxImageSize = 200,
    minImageSize = 50,
    elementGap = 50,
    rotationOnStart = 0,
    rotationOnActive = 0,
    rotationOnEnd = 0,
    randomizeHeights = false,
    heightVariation = 50,
    tooltipTheme = 'light',
    tooltipText = ' ', //do not autofire it by default if value is space
    tooltipAutoShow = true,
    arriveTogetherDelay = 0,
    scenario = [],
    typewriterEffect = false,
    typewriterSpeed = 50, // Speed in milliseconds per character
    id = 'pop', // ID prefix for each pop element
    closeTippyOnClick = true, // Whether to close Tippy on click
    parallax = false, // New parameter for parallax effect
    parallax_strength = 10, // New parameter for parallax strength
    sticker = false, // New parameter for sticker effect
    zIndex = 1, // New parameter for z-index
    position = 'absolute', // New parameter for CSS position type
    draggable = false, // New parameter for draggable functionality
    drag_return = true, // New parameter for drag return functionality
    distance = [], // New parameter for distance [x, y]
    tip_x = 0, // New parameter for tooltip X position
    tip_y = 0, // New parameter for tooltip Y position
    tip_direction = 'top', // New parameter for tooltip direction
    passthrough = false, // New parameter for making the element unclickable
    tip = '', // New parameter for tip attribute
    thumb = '', // New parameter for thumb attribute
    tippy_width = 'auto', // New parameter for Tippy width
    tippy_height = 'auto', // New parameter for Tippy height
    tippy_max_width = 'none', // New parameter for Tippy max width
    tippy_max_height = 'none', // New parameter for Tippy max height
    tip_trigger = 'mouseenter', // New parameter for Tippy trigger
    tippy_zindex = 1000, // New parameter for Tippy z-index
    onPhoneBorders = [], // New parameter for distance adjustment
  } = options;

  const container = document.querySelector(containerSelector);

  // Helper function to normalize parameters
  function normalizeParam(param, length) {
    if (!Array.isArray(param)) {
      return Array(length).fill(param);
    }
    return param;
  }

  // Helper function to randomly select an item from an array
  function randomSelect(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  const popCount = popImages.length;
  const normalizedParams = {
    borderPosition: normalizeParam(borderPosition, popCount),
    imageSize: normalizeParam(imageSize, popCount),
    animationDelay: normalizeParam(animationDelay, popCount),
    slideInTime: normalizeParam(slideInTime, popCount),
    slideOutTime: normalizeParam(slideOutTime, popCount),
    delayBeforeStart: normalizeParam(delayBeforeStart, popCount),
    imageSpacing: normalizeParam(imageSpacing, popCount),
    customSlideInAnim: normalizeParam(customSlideInAnim, popCount),
    customSlideOutAnim: normalizeParam(customSlideOutAnim, popCount),
    extraSpacing: normalizeParam(extraSpacing, popCount),
    delayBetweenElements: normalizeParam(delayBetweenElements, popCount),
    randomizeSizes: normalizeParam(randomizeSizes, popCount),
    maxImageSize: normalizeParam(maxImageSize, popCount),
    minImageSize: normalizeParam(minImageSize, popCount),
    elementGap: normalizeParam(elementGap, popCount),
    rotationOnStart: normalizeParam(rotationOnStart, popCount),
    rotationOnActive: normalizeParam(rotationOnActive, popCount),
    rotationOnEnd: normalizeParam(rotationOnEnd, popCount),
    randomizeHeights: normalizeParam(randomizeHeights, popCount),
    heightVariation: normalizeParam(heightVariation, popCount),
    tooltipTheme: normalizeParam(tooltipTheme, popCount),
    tooltipAutoShow: normalizeParam(tooltipAutoShow, popCount),
    arriveTogetherDelay: normalizeParam(arriveTogetherDelay, popCount),
    scenario: normalizeParam(scenario, popCount),
    typewriterEffect: normalizeParam(typewriterEffect, popCount),
    typewriterSpeed: normalizeParam(typewriterSpeed, popCount),
    id: normalizeParam(id, popCount),
    closeTippyOnClick: normalizeParam(closeTippyOnClick, popCount),
    tooltipText: normalizeParam(tooltipText, popCount),
    parallax: normalizeParam(parallax, popCount), // Normalize the parallax parameter
    parallax_strength: normalizeParam(parallax_strength, popCount), // Normalize the parallax strength parameter
    sticker: normalizeParam(sticker, popCount), // Normalize the sticker parameter
    zIndex: normalizeParam(zIndex, popCount), // Normalize the z-index parameter
    position: normalizeParam(position, popCount), // Normalize the position parameter
    draggable: normalizeParam(draggable, popCount), // Normalize the draggable parameter
    drag_return: normalizeParam(drag_return, popCount), // Normalize the drag_return parameter
    distance: normalizeParam(distance, popCount), // Normalize the distance parameter
    tip_x: normalizeParam(tip_x, popCount), // Normalize the tip_x parameter
    tip_y: normalizeParam(tip_y, popCount), // Normalize the tip_y parameter
    tip_direction: normalizeParam(tip_direction, popCount), // Normalize the tip_direction parameter
    passthrough: normalizeParam(passthrough, popCount), // Normalize the passthrough parameter
    tip: normalizeParam(tip, popCount), // Normalize the tip parameter
    thumb: normalizeParam(thumb, popCount), // Normalize the thumb parameter
    tippy_width: normalizeParam(tippy_width, popCount), // Normalize the tippy_width parameter
    tippy_height: normalizeParam(tippy_height, popCount), // Normalize the tippy_height parameter
    tippy_max_width: normalizeParam(tippy_max_width, popCount), // Normalize the tippy_max_width parameter
    tippy_max_height: normalizeParam(tippy_max_height, popCount), // Normalize the tippy_max_height parameter
    tip_trigger: normalizeParam(tip_trigger, popCount), // Normalize the tip_trigger parameter
    tippy_zindex: normalizeParam(tippy_zindex, popCount), // Normalize the tippy_zindex parameter
    onPhoneBorders: normalizeParam(onPhoneBorders, popCount), // Normalize the onPhoneBorders parameter
  };

  function createPopElements(src, index) {
    // Check if the src is an array and randomly select an element if it is
    if (Array.isArray(src)) {
      src = randomSelect(src);
    }

    const popElement = document.createElement('div');
    popElement.style.position = normalizedParams.position[index]; // Set the CSS position type
    popElement.style.transition = `all ${normalizedParams.slideInTime[index] / 1000}s ease-in-out`;
    popElement.id = normalizedParams.id[index]; // Assign the ID to the pop element
    popElement.style.zIndex = normalizedParams.zIndex[index]; // Set the z-index
    popElement.style.pointerEvents = normalizedParams.passthrough[index] ? 'none' : 'auto'; // Set pointer-events based on passthrough

    // Set tip attribute
    if (normalizedParams.tip[index]) {
      const tipValue = Array.isArray(normalizedParams.tip[index]) ? randomSelect(normalizedParams.tip[index]) : normalizedParams.tip[index];
      popElement.setAttribute('tip', tipValue);
    }

    // Set thumb attribute
    if (normalizedParams.thumb[index]) {
      const thumbValue = Array.isArray(normalizedParams.thumb[index]) ? randomSelect(normalizedParams.thumb[index]) : normalizedParams.thumb[index];
      popElement.setAttribute('thumb', thumbValue);
    }

    if (normalizedParams.sticker[index]) {
      popElement.style.filter = 'drop-shadow(4px 0px 0 white) drop-shadow(-4px 0px 0 white) drop-shadow(0px 4px 0 white) drop-shadow(0px -4px 0 white) drop-shadow(0px 0px 2px black)';
    }

    const imgElement = document.createElement('img');
    imgElement.src = src;
    imgElement.style.width = '100%';
    imgElement.style.height = '100%';
    imgElement.style.userSelect = 'none'; // Prevent image from being selected
    imgElement.style.pointerEvents = 'none'; // Prevent image from being dragged
    popElement.appendChild(imgElement);

    const aspectRatio = 1;
    const randomSize = normalizedParams.randomizeSizes[index] ? Math.random() * (normalizedParams.maxImageSize[index] - normalizedParams.minImageSize[index]) + normalizedParams.minImageSize[index] : normalizedParams.imageSize[index];
    const randomWidth = randomSize * aspectRatio;
    popElement.style.width = `${randomWidth}px`;
    popElement.style.height = `${randomSize}px`;

    const randomHeightOffset = normalizedParams.randomizeHeights[index] ? Math.random() * normalizedParams.heightVariation[index] - normalizedParams.heightVariation[index] / 2 : 0;

    const borderPos = normalizedParams.borderPosition[index];
    const xOffset = typeof borderPos === 'object' ? borderPos[0] : 0;
    const yOffset = typeof borderPos === 'object' ? borderPos[1] : 0;

    let initialPosition = {};

    if (Array.isArray(borderPos)) {
      initialPosition = {
        top: `${yOffset}px`,
        left: `${xOffset}px`
      };
    } else {
      switch (borderPos) {
        case 'top':
          initialPosition = {
            top: `-${randomSize + normalizedParams.extraSpacing[index]}px`,
            left: `${container.offsetWidth / 2 - randomWidth / 2 + xOffset}px`
          };
          break;
        case 'right':
          initialPosition = {
            right: `-${randomWidth + normalizedParams.extraSpacing[index]}px`,
            top: `${container.offsetHeight / 2 - randomSize / 2 + yOffset + randomHeightOffset}px`
          };
          break;
        case 'bottom':
          initialPosition = {
            bottom: `-${randomSize + normalizedParams.extraSpacing[index]}px`,
            left: `${container.offsetWidth / 2 - randomWidth / 2 + xOffset}px`
          };
          break;
        case 'left':
          initialPosition = {
            left: `-${randomWidth + normalizedParams.extraSpacing[index]}px`,
            top: `${container.offsetHeight / 2 - randomSize / 2 + yOffset + randomHeightOffset}px`
          };
          break;
        case 'middle':
          initialPosition = {
            top: `${container.offsetHeight / 2 - randomSize / 2 + yOffset + randomHeightOffset}px`,
            left: `${container.offsetWidth / 2 - randomWidth / 2 + xOffset}px`
          };
          break;
        case 'top-left':
          initialPosition = {
            top: `${0 + normalizedParams.extraSpacing[index]}px`,
            left: `${0 + normalizedParams.extraSpacing[index]}px`
          };
          break;
        case 'top-right':
          initialPosition = {
            top: `${0 + normalizedParams.extraSpacing[index]}px`,
            right: `${0 + normalizedParams.extraSpacing[index]}px`
          };
          break;
        case 'bottom-right':
          initialPosition = {
            bottom: `${0 + normalizedParams.extraSpacing[index]}px`,
            right: `${0 + normalizedParams.extraSpacing[index]}px`
          };
          break;
        case 'bottom-left':
          initialPosition = {
            bottom: `${0 + normalizedParams.extraSpacing[index]}px`,
            left: `${0 + normalizedParams.extraSpacing[index]}px`
          };
          break;
      }
    }

    // Apply distance to initial position
    if (Array.isArray(normalizedParams.distance[index]) && normalizedParams.distance[index].length === 2) {
      initialPosition.left = `${parseFloat(initialPosition.left) + normalizedParams.distance[index][0]}px`;
      initialPosition.top = `${parseFloat(initialPosition.top) + normalizedParams.distance[index][1]}px`;
    }

    // Apply onPhoneBorders to initial position
    if (Array.isArray(normalizedParams.onPhoneBorders[index]) && normalizedParams.onPhoneBorders[index].length === 2) {
      initialPosition.left = `${parseFloat(initialPosition.left) + normalizedParams.onPhoneBorders[index][0]}px`;
      initialPosition.top = `${parseFloat(initialPosition.top) + normalizedParams.onPhoneBorders[index][1]}px`;
    }

    popElement.style.top = initialPosition.top;
    popElement.style.left = initialPosition.left;
    popElement.style.right = initialPosition.right;
    popElement.style.bottom = initialPosition.bottom;

    container.appendChild(popElement);

    const arriveDelay = normalizedParams.delayBetweenElements[index] ? index * normalizedParams.arriveTogetherDelay[index] : 0;

    setTimeout(() => {
      if (Array.isArray(borderPos)) {
        popElement.style.top = `${yOffset}px`;
        popElement.style.left = `${xOffset}px`;
      } else {
        switch (borderPos) {
          case 'top':
          case 'top-left':
          case 'top-right':
          case 'top-middle':
            popElement.style.top = `${normalizedParams.extraSpacing[index]}px`;
            break;
          case 'right':
          case 'top-right':
          case 'bottom-right':
            popElement.style.right = `${normalizedParams.extraSpacing[index]}px`;
            break;
          case 'bottom':
          case 'bottom-left':
          case 'bottom-right':
          case 'bottom-middle':
            popElement.style.bottom = `${normalizedParams.extraSpacing[index]}px`;
            break;
          case 'left':
          case 'top-left':
          case 'bottom-left':
            popElement.style.left = `${normalizedParams.extraSpacing[index]}px`;
            break;
          case 'middle':
            popElement.style.top = `${container.offsetHeight / 2 - randomSize / 2 + yOffset + randomHeightOffset}px`;
            popElement.style.left = `${container.offsetWidth / 2 - randomWidth / 2 + xOffset}px`;
            break;
          case 'top-left':
            popElement.style.top = `${normalizedParams.extraSpacing[index]}px`;
            popElement.style.left = `${normalizedParams.extraSpacing[index]}px`;
            break;
          case 'top-right':
            popElement.style.top = `${normalizedParams.extraSpacing[index]}px`;
            popElement.style.right = `${normalizedParams.extraSpacing[index]}px`;
            break;
          case 'bottom-right':
            popElement.style.bottom = `${normalizedParams.extraSpacing[index]}px`;
            popElement.style.right = `${normalizedParams.extraSpacing[index]}px`;
            break;
          case 'bottom-left':
            popElement.style.bottom = `${normalizedParams.extraSpacing[index]}px`;
            popElement.style.left = `${normalizedParams.extraSpacing[index]}px`;
            break;
        }
      }

      // Apply distance to final position
      if (Array.isArray(normalizedParams.distance[index]) && normalizedParams.distance[index].length === 2) {
        popElement.style.left = `${parseFloat(popElement.style.left) + normalizedParams.distance[index][0]}px`;
        popElement.style.top = `${parseFloat(popElement.style.top) + normalizedParams.distance[index][1]}px`;
      }

      // Apply onPhoneBorders to final position
      if (Array.isArray(normalizedParams.onPhoneBorders[index]) && normalizedParams.onPhoneBorders[index].length === 2) {
        popElement.style.left = `${parseFloat(popElement.style.left) + normalizedParams.onPhoneBorders[index][0]}px`;
        popElement.style.top = `${parseFloat(popElement.style.top) + normalizedParams.onPhoneBorders[index][1]}px`;
      }

      imgElement.style.transform = `rotate(${normalizedParams.rotationOnStart[index]}deg)`;
      if (normalizedParams.customSlideInAnim[index]) popElement.style.animation = normalizedParams.customSlideInAnim[index];

      setTimeout(() => {
        imgElement.style.transform = `rotate(${normalizedParams.rotationOnActive[index]}deg)`;
      }, normalizedParams.slideInTime[index]);
    }, arriveDelay);

    let popColors;
    steal(imgElement.src, false)
      .then((colors) => {
        popColors = colors;
      })
      .catch((error) => {
        console.error('Error:', error);
      });

    let tippyInstance;
    if (normalizedParams.tooltipText[index]) {
      tippyInstance = tippy(popElement, {
        content: '', // Start with empty content
        theme: normalizedParams.tooltipTheme[index],
        trigger: normalizedParams.tip_trigger[index], // Set the trigger type
        followCursor: false,
        placement: normalizedParams.tip_direction[index], // Set tooltip direction
        offset: [normalizedParams.tip_x[index], normalizedParams.tip_y[index]], // Set tooltip position offset
        zIndex: normalizedParams.tippy_zindex[index], // Set Tippy z-index
        onShow: (instance) => {
          requestAnimationFrame(() => updateTooltipPosition());

          function updateTooltipPosition() {
            if (!popElement.isConnected) {
              tippyInstance.destroy();
              return;
            }

            const rect = popElement.getBoundingClientRect();
            const zoomFactor = getZoomLevel();
            tippyInstance.setProps({
              getReferenceClientRect: () => ({
                width: rect.width / zoomFactor,
                height: rect.height / zoomFactor,
                top: rect.top / zoomFactor,
                right: rect.right / zoomFactor,
                bottom: rect.bottom / zoomFactor,
                left: rect.left / zoomFactor
              })
            });
          }

          // Start the timer to continuously update the tooltip position
          const tooltipUpdateInterval = setInterval(() => {
            updateTooltipPosition();
          }, 100); // Adjust the interval as needed

          // Clear the interval when the tooltip is hidden
          tippyInstance.popper.addEventListener('hidden', () => {
            clearInterval(tooltipUpdateInterval);
          });

          // Apply typewriter effect if enabled
          if (normalizedParams.typewriterEffect[index]) {
            let i = 0;
            const typewriterInterval = setInterval(() => {
              if (i < normalizedParams.tooltipText[index].length) {
                instance.setContent(normalizedParams.tooltipText[index].substring(0, i + 1));
                i++;
              } else {
                clearInterval(typewriterInterval);
              }
            }, normalizedParams.typewriterSpeed[index]);
          } else {
            instance.setContent(normalizedParams.tooltipText[index]);
          }
        },
        onClickOutside: normalizedParams.closeTippyOnClick[index] ? 'hide' : null, // Control whether Tippy should close on click
        maxWidth: normalizedParams.tippy_max_width[index], // Set Tippy max width
        maxHeight: normalizedParams.tippy_max_height[index], // Set Tippy max height
        width: normalizedParams.tippy_width[index], // Set Tippy width
        height: normalizedParams.tippy_height[index] // Set Tippy height
      });

      if (normalizedParams.tooltipAutoShow[index]) {
        setTimeout(() => {
          tippyInstance.show();
        }, arriveDelay + normalizedParams.slideInTime[index]);
      }
    }

    if (normalizedParams.parallax[index]) {
      const parallaxHandler = (event) => {
        const x = (event.clientX - window.innerWidth / 2) * normalizedParams.parallax_strength[index] / 100;
        const y = (event.clientY - window.innerHeight / 2) * normalizedParams.parallax_strength[index] / 100;
        popElement.style.transform = `translate(${x}px, ${y}px)`; // Parallax effect on the div
      };

      if (normalizedParams.parallax[index] === 'auto') {
        const autoHover = () => {
          const x = (Math.random() * 2 - 1) * normalizedParams.parallax_strength[index];
          const y = (Math.random() * 2 - 1) * normalizedParams.parallax_strength[index];
          popElement.style.transform = `translate(${x}px, ${y}px)`; // Parallax effect on the div
          setTimeout(autoHover, 200); // Adjust the interval as needed
        };
        autoHover();

      } else {
        document.addEventListener('mousemove', parallaxHandler);
      }

      // Clean up the parallax effect when the element is removed
      popElement.addEventListener('remove', () => {
        document.removeEventListener('mousemove', parallaxHandler);
      });
    }

    if (normalizedParams.draggable[index]) {
      let initialPosition = {
        top: parseFloat(popElement.style.top),
        left: parseFloat(popElement.style.left)
      };

      let isDragging = false;
      let offset = { x: 0, y: 0 };
      popElement.addEventListener('pointerdown', (event) => {
        isDragging = true;
        offset.x = event.clientX - popElement.getBoundingClientRect().left;
        offset.y = event.clientY - popElement.getBoundingClientRect().top;
      });

      document.addEventListener('mousemove', (event) => {
        if (isDragging) {
          let newLeft = event.clientX - offset.x;
          let newTop = event.clientY - offset.y;

          popElement.style.left = `${newLeft}px`;
          popElement.style.top = `${newTop}px`;
        }
      });

      document.addEventListener('mouseup', () => {
        isDragging = false;
        if (normalizedParams.drag_return[index]) {
          popElement.style.transition = `all ${normalizedParams.slideInTime[index] / 1000}s ease-in-out`;
          popElement.style.left = `${initialPosition.left}px`;
          popElement.style.top = `${initialPosition.top}px`;
        }
      });
    }

    (async () => {
      for (const action of normalizedParams.scenario[index]) {
        const { delay = 0, ...actionParams } = action;
        console.log('Current action:', actionParams);

        // Wait for the specified delay
        await new Promise(resolve => setTimeout(resolve, delay));

        if (actionParams.input) {
          console.log('Input action detected, waiting for user input...');
          const customMenu = actionParams.customMenu || [];

          // Create and add the "🕐" emoji element
          const waitingEmoji = document.createElement('span');
          waitingEmoji.textContent = '🕐';
          waitingEmoji.style.position = 'absolute';
          waitingEmoji.style.left = `${popElement.offsetWidth + 1}px`; // Adjust position relative to popElement
          waitingEmoji.style.top = '0'; // Adjust position relative to popElement
          waitingEmoji.style.zIndex = 1000; // Ensure it's above the popElement
          popElement.appendChild(waitingEmoji);

          // Wait for spawn_zChat to return a value
          const selectedValue = await spawn_zChat(null, customMenu);

          // Remove the "🕐" emoji element after response
          waitingEmoji.remove();

          console.log('🕐:', selectedValue);

          // Handle the returned value
          if (selectedValue.text === actionParams.answer) {
            console.log('Right answer!');
            if (Array.isArray(actionParams.right)) {
              for (let rightAction of actionParams.right) {
                await applyScenarioAction(popElement, rightAction, tippyInstance, index);
              }
            }
          } else {
            console.log('Wrong answer!');
            if (Array.isArray(actionParams.wrong)) {
              for (let wrongAction of actionParams.wrong) {
                await applyScenarioAction(popElement, wrongAction, tippyInstance, index);
              }
            }
          }

          // Log "back to main branch" in green color
          console.log('%cBack to main branch', 'color: green');
        }

        // Apply the main action to the pop element
        await applyScenarioAction(popElement, actionParams, tippyInstance, index);

        // If this action had input, wait a bit before moving to the next action
        // This gives time for any UI updates or animations to complete
        if (actionParams.input) {
          await new Promise(resolve => setTimeout(resolve, 500));
        }
      }

      console.log('Scenario execution completed.');
    })();

    // Ensure Tippy instance gets removed if the pop element is deleted or removed
    popElement.addEventListener('remove', () => {
      if (tippyInstance) {
        tippyInstance.destroy();
      }
    });
  }

  async function applyScenarioAction(element, actionParams, tippyInstance, popIndex) {
    const { delay = 0, ...restActionParams } = actionParams;

    // Wait for the specified delay
    await new Promise(resolve => setTimeout(resolve, delay));

    // The rest of the existing code for other actions...
    if (restActionParams.tooltipText) {
      if (tippyInstance) {
        // Clear the existing content
        tippyInstance.setContent('');
        // Randomly select a tooltip text if it's an array
        const tooltipText = Array.isArray(restActionParams.tooltipText) ? randomSelect(restActionParams.tooltipText) : restActionParams.tooltipText;

        // Apply typewriter effect if enabled
        if (restActionParams.typewriterEffect) {
          let i = 0;
          const typewriterInterval = setInterval(() => {
            if (i < tooltipText.length) {
              tippyInstance.setContent(tooltipText.substring(0, i + 1));
              i++;
            } else {
              clearInterval(typewriterInterval);
            }
          }, restActionParams.typewriterSpeed || 50);
        } else {
          tippyInstance.setContent(tooltipText);
        }
      }
    }

    if (restActionParams.rotation) {
      element.querySelector('img').style.transform = `rotate(${restActionParams.rotation}deg)`;
    }

    if (restActionParams.moveX || restActionParams.moveY) {
      const currentLeft = element.offsetLeft;
      const currentTop = element.offsetTop;
      element.style.left = `${currentLeft + (restActionParams.moveX || 0)}px`;
      element.style.top = `${currentTop + (restActionParams.moveY || 0)}px`;
    }

    if (restActionParams.addClass) {
      element.classList.add(restActionParams.addClass);
    }

    if (restActionParams.removeClass) {
      element.classList.remove(restActionParams.removeClass);
    }

    // Assign event if provided
    if (actionParams.event) {
      element.removeEventListener(actionParams.event_type || 'click', actionParams.event); // Remove previous event if exists
      element.addEventListener(actionParams.event_type || 'click', actionParams.event);
    }

    // Inject HTML if provided
    if (actionParams.html) {
      const tempDiv = document.createElement('div');
      tempDiv.innerHTML = actionParams.html;
      container.appendChild(tempDiv);
    }

    // Execute JavaScript if provided
    if (actionParams.js) {
      if (typeof actionParams.js === 'function') {
        actionParams.js();
      } else if (typeof actionParams.js === 'string') {
        const script = document.createElement('script');
        script.text = actionParams.js;
        document.head.appendChild(script).parentNode.removeChild(script);
      }
    }

    // Change image if provided
    if (actionParams.image) {
      if (actionParams.image === 'default') {
        element.querySelector('img').src = popImages[popIndex];
      } else if (Array.isArray(actionParams.image)) {
        element.querySelector('img').src = randomSelect(actionParams.image);
      } else {
        element.querySelector('img').src = actionParams.image;
      }
    }

    if (restActionParams.remove) {
      element.remove();
      return;
    }

    // Toggle passthrough if provided
    if (restActionParams.passthrough !== undefined) {
      element.style.pointerEvents = restActionParams.passthrough ? 'none' : 'auto';
    }

    for (const [key, value] of Object.entries(restActionParams)) {
      switch (key) {
        case 'size':
          const aspectRatio = 1;
          const randomSize = value;
          const randomWidth = randomSize * aspectRatio;
          element.style.width = `${randomWidth}px`;
          element.style.height = `${randomSize}px`;
          break;
        case 'rotationOnStart':
        case 'rotationOnActive':
        case 'rotationOnEnd':
          element.querySelector('img').style.transform = `rotate(${value}deg)`;
          break;
        case 'customSlideInAnim':
        case 'customSlideOutAnim':
          element.style.animation = value;
          break;
        case 'zIndex':
          element.style.zIndex = value;
          break;
      }
    }
  }

  for (let i = 0; i < popImages.length; i++) {
    createPopElements(popImages[i], i);
  }
}

//---endec-----

function zend(normalText, hiddenMessage) {
  const zeroWidthChars = {
      '0': '\u200B', // Zero Width Space
      '1': '\u200C', // Zero Width Non-Joiner
      '2': '\u200D', // Zero Width Joiner
      '3': '\uFEFF'  // Zero Width No-Break Space
  };

  const zeroWidthCharsReverse = {
      '\u200B': '0', // Zero Width Space
      '\u200C': '1', // Zero Width Non-Joiner
      '\u200D': '2', // Zero Width Joiner
      '\uFEFF': '3'  // Zero Width No-Break Space
  };

  // Encryption
  if (hiddenMessage !== undefined) {
      // Convert hidden message to binary
      let binaryMessage = '';
      for (let i = 0; i < hiddenMessage.length; i++) {
          let charCode = hiddenMessage.charCodeAt(i).toString(2);
          binaryMessage += charCode.padStart(8, '0');
      }

      // Encode binary message into zero-width characters
      let encodedMessage = '';
      for (let i = 0; i < binaryMessage.length; i++) {
          encodedMessage += zeroWidthChars[binaryMessage[i]];
      }

      // Combine normal text with encoded message
      return normalText + encodedMessage;
  }

  // Decryption
  else {
      // Extract zero-width characters
      let binaryMessage = '';
      for (let i = 0; i < normalText.length; i++) {
          let char = normalText[i];
          if (zeroWidthCharsReverse[char] !== undefined) {
              binaryMessage += zeroWidthCharsReverse[char];
          }
      }

      // Convert binary message to hidden text
      let hiddenMessage = '';
      for (let i = 0; i < binaryMessage.length; i += 8) {
          let byte = binaryMessage.substring(i, i + 8);
          hiddenMessage += String.fromCharCode(parseInt(byte, 2));
      }

      return hiddenMessage;
  }
}



//
// ##### #####    ##   #    #  ####  #        ##   #####  ####  #####
//   #   #    #  #  #  ##   # #      #       #  #    #   #    # #    #
//   #   #    # #    # # #  #  ####  #      #    #   #   #    # #    #
//   #   #####  ###### #  # #      # #      ######   #   #    # #####
//   #   #   #  #    # #   ## #    # #      #    #   #   #    # #   #
//   #   #    # #    # #    #  ####  ###### #    #   #    ####  #    #

function translator() {
  // Create the wrapper div
  const wrapper = document.createElement('div');
  wrapper.className = 'gtranslate_wrapper';
  wrapper.style.zIndex = '9999999999'; // Set the z-index
  document.body.appendChild(wrapper);

  // Create the script element for gtranslateSettings
  const settingsScript = document.createElement('script');
  settingsScript.textContent = `
      window.gtranslateSettings = {
          "default_language": "en",
          "native_language_names": true,
          "detect_browser_language": true,
          "languages": ["en", "ar"],
          "wrapper_selector": ".gtranslate_wrapper",
          "flag_style": "3d",
          "alt_flags": {
              "en": "usa"
          }
      };
  `;
  document.body.appendChild(settingsScript);

  // Create the script element for the gtranslate widget
  const widgetScript = document.createElement('script');
  widgetScript.src = 'https://cdn.gtranslate.net/widgets/latest/float.js';
  widgetScript.defer = true;
  document.body.appendChild(widgetScript);
}

// Inject the translator function after 5 seconds
setTimeout(translator, 3000);