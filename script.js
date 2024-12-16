let docHeight;
let closest, ab;
let LastClickedLink;
let explorer_height_factor = 1.5



function logo(text) {
  // Create container element
  const container = document.createElement('div');
  container.className = 'text-effect-container';
  container.textContent = text;
  
  // Create SVG filter
  const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("class", "filter");
  svg.setAttribute("xmlns", "http://www.w3.org/2000/svg");
  svg.innerHTML = `
      <filter id="noise">
          <feTurbulence baseFrequency="0.185" />
          <feColorMatrix values="0 0 0 9 -5
                               0 0 0 9 -4
                               0 0 0 9 -5
                               0 0 0 0 1" />
      </filter>
  `;
  
  // Create styles
  const styles = `
      .text-effect-container {
          font-size: 25vmin;
          position: fixed;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          display: grid;
          place-items: center;
          font-family: "share tech", sans-serif;
          font-weight: bold;
          text-align: center;
          background: conic-gradient(#f6a2f6, #e74f89, #7e7ecb, #ffd500, #ee75d2, #13f5fa, #f6a2f6);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          text-fill-color: transparent;
          z-index: 9999;
          opacity: 0;
          animation: fadeInOut 4s ease-in-out forwards;
      }

      .text-effect-container::before {
          content: "${text}";
          position: absolute;
          inset: 0;
          color: transparent;
          --c: color-mix(in srgb, white, transparent 94%);
          --c2: transparent;
          text-shadow: -5vmin 3.3333333333vmin 0.01vmin var(--c2),
                      -4.75vmin 3.1666666667vmin 0.1vmin rgba(255, 255, 255, 0.9),
                      -4.5vmin 3vmin 0.025vmin var(--c),
                      -4.25vmin 2.8333333333vmin 0.025vmin var(--c),
                      -4vmin 2.6666666667vmin 0.025vmin var(--c),
                      -3.75vmin 2.5vmin 0.025vmin var(--c),
                      -3.5vmin 2.3333333333vmin 0.025vmin var(--c),
                      -3.25vmin 2.1666666667vmin 0.025vmin var(--c),
                      -3vmin 2vmin 0.025vmin var(--c),
                      -2.75vmin 1.8333333333vmin 0.025vmin var(--c),
                      -2.5vmin 1.6666666667vmin 0.025vmin var(--c),
                      -2.25vmin 1.5vmin 0.025vmin var(--c),
                      -2vmin 1.3333333333vmin 0.025vmin var(--c),
                      -1.75vmin 1.1666666667vmin 0.025vmin var(--c),
                      -1.5vmin 1vmin 0.025vmin var(--c),
                      -1.25vmin 0.8333333333vmin 0.025vmin var(--c),
                      -1vmin 0.6666666667vmin 0.025vmin var(--c),
                      -0.75vmin 0.5vmin 0.025vmin var(--c),
                      -0.5vmin 0.3333333333vmin 0.025vmin var(--c),
                      -0.25vmin 0.1666666667vmin 0.025vmin var(--c),
                      -0vmin 0vmin 0.025vmin var(--c);
      }

      .filter {
          position: absolute;
          visibility: hidden;
          z-index: 9998;
      }

      @keyframes fadeInOut {
          0% { opacity: 0; }
          25% { opacity: 1; }
          75% { opacity: 1; }
          100% { opacity: 0; }
      }
  `;

  // Create and inject stylesheet
  const styleSheet = document.createElement("style");
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  // Inject elements
  document.body.appendChild(svg);
  document.body.appendChild(container);

  // Set a timeout to remove the elements and stylesheet after 5 seconds
  setTimeout(() => {
      styleSheet.remove();
      svg.remove();
      container.remove();
  }, 5000); // 5000 milliseconds = 5 seconds

  return {
      remove: () => {
          styleSheet.remove();
          svg.remove();
          container.remove();
      }
  };
}

logo(`TUTOS`);






$(() => {
  window["theme"] = "dark";
  $("body")[0].style.setProperty("--theme", window["theme"]);

  $("body").append(
    (window["desktop"] = new Desktop({
      icons: [



        new DesktopIcon({
          id: "gigs",
          icon: `https://i.ibb.co/s6dd22R/gigs.png`,
          text: "Hire Top Freelancers",
          action: `Window.spawnWindow('explorer', { titlebar: 'gigs', icon:'https://i.ibb.co/s6dd22R/gigs.png', path: 'gigs' , mode:'big' })`,
          emoji:`💷`,
          thumb:`https://i.ibb.co/s6dd22R/gigs.png`,
          tip:`find the best gigs with cheapest prices, hire a full team not just 1 stupid hustler (WITH SAME PRICES!)`}),

        new DesktopIcon({
          id: "products",
          icon: `https://i.ibb.co/x8sYhhB/products.png`,
          text: "Buy Best Products",
          action:`soon()`,
          // action: `Window.spawnWindow('explorer', { titlebar: 'the Shop', icon:'https://i.ibb.co/x8sYhhB/products.png', path: 'products' })`,
          thumb:`https://i.ibb.co/x8sYhhB/products.png`,
          tip:`not like Amazon, not alibaba...we offer stuff you won't find anywhere else, handmade and dope AF`,
          emoji:`📦`,
        }),

        new DesktopIcon({
          id: "digital products",
          icon: `https://i.ibb.co/WFbsfVC/digital.png`,
          text: "Digital Products",
          action:`soon()`,
          thumb:`https://i.ibb.co/WFbsfVC/digital.png`,
          tip:`want customized apps just for your productivity and your workflow, come here broski...we gotcha`,
          emoji:`💽`,
        }),
      
        new DesktopIcon({
          id: "Courses",
          icon: `https://i.ibb.co/dW3KmCX/courses.png`,
          text: "Courses",
          action:`soon()`,
          thumb:`https://i.ibb.co/dW3KmCX/courses.png`,
          tip:`get to know what market actually needs, no blah blah, no wasting time, just the things you would need to learn to survive and conquer on real ground!`,
          emoji:`🧠`,
        }),

        new DesktopIcon({
          id: "subs",
          icon: `https://i.ibb.co/LdPvYjK/flicks.png`,
          url: "",
          text: "السبتايتل المصري",
          action:`soon()`,
          thumb:`https://i.ibb.co/LdPvYjK/flicks.png`,
          tip:`ايوا انا هعملك سبتايتل بالمصري...و مش همسح الشتايم. دانا هترجمهالك... وكمان هحطلك اهم كلمات الفيلم علشان الانجلش بتاعك يبقي احسن وانت بتتفرج`,
          emoji:`🍿`,
        }),


      

      
      ],
    }))
  );

  desktop.append(
    (window["taskbar"] = new Taskbar({
      id: "taskbar",
      center_buttons: [
        
        new TaskbarButton({
          id: 1,
          btn_type: "button",
          pinned: true,
          w_title: "Call Customer support!",
          icon:'https://cdn3d.iconscout.com/3d/premium/thumb/call-done-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-technology-phone-approved-check-pack-services-icons-5808087.png?f=webp',
          app: "customer-support",
        }),
        new TaskbarButton({
          id: 2,
          btn_type: "button",
          pinned: true,
          w_title: "youtube",
          icon:'https://cdn3d.iconscout.com/3d/premium/thumb/youtube-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-social-media-logos-brand-pack-icons-9336273.png?f=webp',
          app: "youtube",
        }),

        new TaskbarButton({
          id: 3,
          btn_type: "button",
          pinned: true,
          w_title: "tiktok",
          icon:'https://cdn3d.iconscout.com/3d/free/thumb/free-tiktok-3d-icon-download-in-png-blend-fbx-gltf-file-formats--logo-social-media-app-pack-logos-icons-8250225.png?f=webp',
          app: "tiktok",
        }),
        
      ],
    }))
  );

  reinitDraggables();
  reinit_tooltips();

  docHeight = $(window).height();
});

$(window).on("resize", function () {
  docHeight = $(window).height();
});

$(document).on("keydown", function (e) {
  if (e.altKey) {
    if (window["theme"] == "dark") {
      window["theme"] = "light";
    } else {
      window["theme"] = "dark";
    }
    toggleTheme();
  }
});

const transparent = () => {
  return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";
};

const reinit_tooltips = () => {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );

};

const closeToolTips = () => {
  $(".tooltip").tooltip("hide");
};

const pauseToolTips = (type) => {
  setTimeout(() => {
    let tts = [].slice.call(
      document.querySelectorAll('[data-bs-toggle="tooltip"]')
    );
    tts.map((tt) => {
      if (tt.length) {
        if (type == true) {
          bootstrap.Tooltip.getInstance(tt).hide();
          bootstrap.Tooltip.getInstance(tt).disable();
          closeToolTips();
        } else {
          bootstrap.Tooltip.getInstance(tt).enable();
        }
      }
    });
  }, 10);
};

const ucwords = (str) => {
  return (str + "").replace(/^([a-z])|\s+([a-z])/g, function ($1) {
    return $1.toUpperCase();
  });
};

const concat = (arr) => {
  let res = "";
  arr.forEach((e) => {
    res += e;
  });
  return res;
  //return res.replace("undefined", "")
};

const hasParents = (e, p) => {
  return $(e.target).parents(p).length;
};

const wid = () => {
  return Math.floor(100000 + Math.random() * 900000);
};

async function screenshotElement(el) {
  return await new Promise((resolve) => {
    html2canvas($(el), {
      onrendered: function (canvas) {
        resolve(canvas.toDataURL());
      },
    });
  });
}

const zeroPad = (num, places) => String(num).padStart(places, "0");

function strstr($haystack, $needle, $bool) {
  var $pos = 0;
  $haystack += "";
  $pos = $haystack.indexOf($needle);
  if ($pos == -1) {
    return false;
  } else {
    if ($bool) {
      return $haystack.substr(0, $pos);
    } else {
      return $haystack.slice($pos);
    }
  }
}

// For middle clicking
$(document).on("mousedown", function (e1) {
  if (e1.which === 2) {
    $(document).one("mouseup", function (e2) {
      if (e1.target === e2.target) {
        var e3 = $.event.fix(e2);
        e3.type = "middleclick";
        $(e2.target).trigger(e3);
      }
    });
  }
});
// Code to see if two elements are touching
const elementsTouch = (a, b) => {
  if (a && b) {
    let rect1 = a.getBoundingClientRect();
    let rect2 = b.getBoundingClientRect();
    return !(
      rect1.top + rect1.height < rect2.top ||
      rect1.top > rect2.top + rect2.height ||
      rect1.left + rect1.width < rect2.left ||
      rect1.left > rect2.left + rect2.width
    );
  }
};

// Allows elements to be dragged
const reinitDraggables = (element) => {
  $(element).each((i, el) => {
    let pos = {};
    let handle = $(el).find(".handle");

    $(el)
      .find(handle)
      .on("mousedown touchstart", function (e) {
        pos = {
          x: e.clientX,
          y: e.clientY,
        };

        $(document).on("mousemove touchmove", $(el), mouseMoveHandler);
        $(document).on("mouseup touchend", $(el), mouseUpHandler);
      });

    const mouseMoveHandler = (e) => {
      const dx = e.clientX - pos.x;
      const dy = e.clientY - pos.y;

      $(el)
        .not(".maximized")
        .css({
          top: `${el.offsetTop + dy}px`,
          left: `${el.offsetLeft + dx}px`,
        });

      pos = {
        x: e.clientX,
        y: e.clientY,
      };
    };

    const mouseUpHandler = () => {
      $(document).off("mousemove touchmove", mouseMoveHandler);
      $(document).off("mouseup touchend", mouseUpHandler);
    };
  });
};

// Allows element to be resized from all sides and corners
const reinitResizables = (element, min_size = 20) => {
  $(element).each((i, el) => {
    $(el).html(
      $(el).html() +
        `
      <div class="resizer resizer-l"></div>
      <div class="resizer resizer-r"></div>
      <div class="resizer resizer-t"></div>
      <div class="resizer resizer-b"></div>
      
      <div class="resizer resizer-tl"></div>
      <div class="resizer resizer-tr"></div>
      <div class="resizer resizer-bl"></div>
      <div class="resizer resizer-br"></div>
    `
    );

    let resizer = $(el).find(".resizer");
    let currentResizer;
    let orig = {};

    $(resizer).on("mousedown touchstart", function (e) {
      currentResizer = e.target;

      const styles = window.getComputedStyle(el);
      orig = {
        w: parseInt(styles.width, 10),
        h: parseInt(styles.height, 10),
        x: parseInt(styles.left, 10),
        y: parseInt(styles.top, 10),
        mx: e.pageX,
        my: e.pageY,
      };

      $(document).on("mousemove touchmove", mouseMoveHandler);
      $(document).on("mouseup touchend", mouseUpHandler);
    });

    const mouseMoveHandler = (e) => {
      let cr = currentResizer.classList;
      if (
        cr.contains("resizer-r") ||
        cr.contains("resizer-tr") ||
        cr.contains("resizer-br")
      ) {
        const newW = orig.w + (e.pageX - orig.mx);
        if (newW > min_size) {
          $(el).css({ width: `${newW}px` });
        }
      }

      if (
        cr.contains("resizer-l") ||
        cr.contains("resizer-tl") ||
        cr.contains("resizer-bl")
      ) {
        const newW = orig.w - (e.pageX - orig.mx);
        if (newW > min_size) {
          $(el).css({
            width: `${newW}px`,
            left: `${orig.x + (e.pageX - orig.mx)}px`,
          });
        }
      }

      if (
        cr.contains("resizer-b") ||
        cr.contains("resizer-bl") ||
        cr.contains("resizer-br")
      ) {
        const newH = orig.h + (e.pageY - orig.my);
        if (newH > min_size) {
          $(el).css({ height: `${newH}px` });
        }
      }

      if (
        cr.contains("resizer-t") ||
        cr.contains("resizer-tl") ||
        cr.contains("resizer-tr")
      ) {
        const newH = orig.h - (e.pageY - orig.my);
        if (newH > min_size) {
          $(el).css({
            height: `${newH}px`,
            top: `${orig.y + (e.pageY - orig.my)}px`,
          });
        }
      }
    };

    const mouseUpHandler = () => {
      $(document).off("mousemove touchmove", mouseMoveHandler);
      $(document).off("mouseup touchend", mouseUpHandler);
    };
  });
};

class Desktop extends HTMLElement {
  constructor(args) {
    super();
    this.icons = args.icons;

    this.addDesktopIcons();
    this.applyTheme();
  }

  connectedCallback() {
    this.eventHandlers();
  }

  addDesktopIcons() {
    $(this).append(this.icons);
  }

  applyTheme() {
    $(this)[0].style.setProperty("--theme", window["theme"]);
    
    const wallpaper_dark = [
        "https://i.ibb.co/2Yt0G2Z/wall.webp",
        "https://i.ibb.co/nmPnRy1/wall2.webp",
"https://i.ibb.co/fpdFbCH/wall3.webp",
      
    ];

    // Randomly select a wallpaper from the array
    let wallpapers = window["theme"] == "light" ? wallpaper_light : wallpaper_dark;
    let randomWallpaper = wallpapers[Math.floor(Math.random() * wallpapers.length)];

    // Apply the randomly selected wallpaper
    $(this).css({ "background-image": `url(${randomWallpaper})` });
}
  eventHandlers() {
    let _this = this;
    let shiftPressed = false;
    let initFocused, currentlyFocused;

    $(this).on("mousedown", function (e) {
      if (!e.ctrlKey && !e.shiftKey) $("w-desktop-icon").removeClass("active");
      //e.preventDefault()
    });

    $(this).on("keyup", function (e) {
      shiftPressed = false;
    });

    $(this).on("keydown", function (e) {
      //38 = Up | 40 = Down
      // CTRL + A (Select All)
      if (e.ctrlKey && e.keyCode == 65) {
        $("w-desktop-icon").addClass("active");
        $("w-desktop-icon.active:last-of-type").focus(); // Focus on the last element selected
      }

      // Keep track of shift press only once
      if (!shiftPressed && e.keyCode == 16) {
        shiftPressed = true;
        initFocused = $("w-desktop-icon:focus").index();
        if ($("w-desktop-icon:focus").length) {
          initFocused = $("w-desktop-icon:focus").index();
        }
      }

      // Standard icon nav without shift key
      if (!e.shiftKey) {
        if (e.keyCode == 38) {
          $("w-desktop-icon:focus").prev().focus();
          $("w-desktop-icon").removeClass("active");
        }
        if (e.keyCode == 40) {
          $("w-desktop-icon:focus").next().focus();
          $("w-desktop-icon").removeClass("active");
        }
      } else {
        if (e.keyCode == 38) {
          $("w-desktop-icon:focus")
            .addClass("active")
            .prev()
            .addClass("active")
            .focus();

          if (currentlyFocused > initFocused) {
            $("w-desktop-icon:focus").nextAll().removeClass("active");
          }
        }

        if (e.keyCode == 40) {
          $("w-desktop-icon:focus")
            .addClass("active")
            .next()
            .addClass("active")
            .focus();

          if (currentlyFocused < initFocused) {
            $("w-desktop-icon:focus").prevAll().removeClass("active");
          }
        }
        currentlyFocused = $("w-desktop-icon:focus").index();
      }
    });

  

    const desktopDrag = () => {
      let pos = {};

      $(document).on("mousedown touchstart", "w-desktop", function (e) {
        if (e.target.nodeName == "W-DESKTOP") {
          pos = {
            x: e.clientX,
            y: e.clientY,
          };

          $("w-desktop").append(`<div class="desktop-drag"></div>`);
          $(".desktop-drag").css({
            top: pos.y,
            left: pos.x,
          });

          $(document).on(
            "mousemove touchmove",
            "w-desktop",
            desktopMouseMoveHandler
          );
          $(document).on(
            "mouseup touchend",
            "w-desktop",
            desktopMouseUpHandler
          );
        }
      });

      const desktopMouseMoveHandler = (e) => {
        if (e.clientX > pos.x) {
          $(".desktop-drag").css({
            left: pos.x,
            width: e.clientX - pos.x,
          });
        }

        if (e.clientY > pos.y) {
          $(".desktop-drag").css({
            top: pos.y,
            height: e.clientY - pos.y,
          });
        }

        if (e.clientX < pos.x) {
          $(".desktop-drag").css({
            left: e.clientX,
            width: pos.x - e.clientX,
          });
        }

        if (e.clientY < pos.y) {
          $(".desktop-drag").css({
            top: e.clientY,
            height: pos.y - e.clientY,
          });
        }

        $("w-desktop-icon").each((i, e) => {
          if (elementsTouch(e, $(".desktop-drag")[0])) $(e).addClass("active");
          if (!elementsTouch(e, $(".desktop-drag")[0]))
            $(e).removeClass("active");
        });
      };

      const desktopMouseUpHandler = () => {
        $(".desktop-drag").remove();
        $("w-desktop-icon:last-of-type").focus(); // Focus on the last element selected
        $(document).off(
          "mousemove touchmove",
          "w-desktop",
          desktopMouseMoveHandler
        );
        $(document).off("mouseup touchend", "w-desktop", desktopMouseUpHandler);
      };
    };
    desktopDrag();
  }
}
customElements.define("w-desktop", Desktop);
class DesktopIcon extends HTMLElement {
  constructor(args) {
    super();
    this.id = args ? args.id : $(this).attr("data-id");
    this.icon = args ? args.icon : $(this).attr("data-icon");
    this.text = args ? args.text : $(this).attr("data-text");
    this.url = args ? args.url : $(this).attr("data-url");
    this.thumb = args ? args.thumb : ``;
    this.tip = args ? args.tip : `double tap to open`;
    this.emoji = args ? args.emoji : ``;
    this.action = (args ? args.action : $(this).attr("data-action")) ?? "";
    $(this).html(this.html());
    $(this).attr("tabindex", 0);
    $(this).attr("draggable", true);
    $(this).attr(`data-url`, this.url);
    $(this).attr(`thumb`, this.thumb);
    $(this).attr(`tip`, this.tip);
    $(this).attr(`emoji`, this.emoji);
    this.hoverActive = false; // Flag to track hover activation
    this.lastTapTime = 0; // To track the time of the last tap
    this.DOUBLE_TAP_THRESHOLD = 300; // Time in milliseconds to detect double-tap
  }

  html() {
    return `
      <img src="${this.icon}" draggable="false">
      <span>${this.text}</span>
    `;
  }

  connectedCallback() {
    this.eventHandlers();
  }

  eventHandlers() {
    let _this = this;

    // Hover emulation for touch devices
    $(this).on("touchstart", function (e) {
      e.preventDefault(); // Prevent default touch behavior (e.g., zooming)

      // Trigger hover effect on first tap
      if (!_this.hoverActive) {
        $("w-desktop-icon").removeClass("hover"); // Remove hover from other elements
        $(this).addClass("hover");

        // Trigger mouseover event to emulate desktop behavior
        const mouseoverEvent = new Event("mouseover", { bubbles: true });
        this.dispatchEvent(mouseoverEvent);

        // Trigger mouseenter for additional compatibility
        const mouseenterEvent = new Event("mouseenter", { bubbles: true });
        this.dispatchEvent(mouseenterEvent);

        _this.hoverActive = true; // Set the hover flag to true after first tap
      }
    });

    $(document).on("touchstart", function (e) {
      // Deactivate hover effect if tapping outside of any w-desktop-icon
      if (!$(e.target).closest("w-desktop-icon").length) {
        $("w-desktop-icon").removeClass("hover");
        _this.hoverActive = false; // Deactivate hover after a tap outside
      }
    });

    $(this).on("touchend", function (e) {
      e.preventDefault(); // Prevent default touch behavior

      const currentTime = new Date().getTime();
      const timeSinceLastTap = currentTime - _this.lastTapTime;

      if (timeSinceLastTap < _this.DOUBLE_TAP_THRESHOLD) {
        // Double-tap detected
        LastClickedLink = _this.url;
        eval(_this.action); // Execute the action (e.g., open link)
        $(this).removeClass("hover"); // Remove hover after action is executed
      }

      _this.lastTapTime = currentTime; // Update the last tap time
    });

    // Disable hover effects if clicked or tapped anywhere else
    $(document).on("click touchstart", function (e) {
      if (!$(e.target).closest("w-desktop-icon").length) {
        $("w-desktop-icon").removeClass("hover");
        _this.hoverActive = false; // Deactivate hover after a click or tap
      }
    });

    // Double-click for desktop
    $(this).on("dblclick", function (e) {
      e.preventDefault(); // Prevent default double-click behavior
      LastClickedLink = _this.url;
      eval(_this.action); // Execute the action
    });

    // Drag-and-drop functionality
    $(this).on("dragstart", function (e) {
      $(this).addClass("dragging");
    });

    $(this).on("dragover", function (e) {
      const closest = $(this).closest("w-desktop-icon:not(.dragging)");

      $("w-desktop-icon").removeClass("dragHovered above below");

      if (closest.length) {
        // Determine if the drag is above or below the item
        const closestCoords = closest[0].getBoundingClientRect();
        if (e.clientY < closestCoords.y + closestCoords.height / 2) {
          $(closest).addClass("dragHovered above");
          ab = "above";
        } else {
          $(closest).addClass("dragHovered below");
          ab = "below";
        }
      }
      e.preventDefault();
    });

    $(this).on("dragend", function (e) {
      $("w-desktop-icon").removeClass("dragHovered dragging above below");
      if (ab == "above") {
        $(closest).before($(this));
      } else {
        $(closest).after($(this));
      }
    });
  }
}

customElements.define("w-desktop-icon", DesktopIcon);

class Taskbar extends HTMLElement {
  constructor(args) {
    super();
    this.id = args.id;
    this.center_buttons = args.center_buttons;
    this.system_tray = args.system_tray;

    $(this).html(this.html());
    this.applyTheme();
    this.drawSections();
  }

  applyTheme() {
    $(this)[0].style.setProperty("--theme", window["theme"]);
  }

  html() {
    return `
            <div class="left"></div>
            <div class="center"></div>
            <div class="right"></div>
        `;
  }

  drawSections() {
    $(this).find(".center").append(this.center_buttons);
    setTimeout(() => {
      // Pull center part to the right to compensate for the sys tray
      $(this)
        .find(".center")
        .css({ "margin-right": `-${$(this).find(".center").width() / 2}px` });
    });
    $(this).find(".right").append(this.system_tray);
  }

  connectedCallback() {
    this.eventHandlers();
  }

 
}
customElements.define("w-taskbar", Taskbar);

class TaskbarButton extends HTMLElement {
  constructor(args) {
    super();
    this.id = args.id;
    this.btn_type = args.btn_type;
    this.w_title = args.w_title;
    this.icon = args.icon;
    this.pinned = args.pinned;
    this.app = args.app;
    this.applyTheme();
    this.applyAttrs();
  }

  html() {
    return `
                  <span class="icon-img" style="background-image: url(${this.icon});"></span>
            `;
  }

  applyTheme() {
    $(this)[0].style.setProperty("--theme", window["theme"]);
    if (this.btn_type == "start")
      this.icon =
        window["theme"] == "dark" ? base64_startbtn_dark : base64_startbtn;
    $(this).html(this.html());
  }

  applyAttrs() {
    $(this).attr("id", `tskbtn_${this.id}`);
    $(this).attr("tabindex", 0);
    $(this).attr("data-bs-toggle", "tooltip");
    $(this).attr("data-bs-placement", "top");
    $(this).attr("title", this.w_title);
    $(this).attr("data-context-id", `ctx_${this.id}`);

    if (this.btn_type == "start") {
      $(this).attr("class", "button start");
    } else {
      $(this).attr("class", "button");
      $(this).attr("data-tskbtn-id", this.id);
      $(this).attr("data-pinned", this.pinned);
      $(this).attr("data-app", this.app);
      $(this).attr("data-app-title", this.w_title);
      $(this).attr("data-app-icon", this.icon);
    }
  }

  connectedCallback() {
    this.eventHandlers();
  }

  eventHandlers() {
    let _this = this;

    // Context menu
    $(this).on("contextmenu", function (e) {
      parent = e.currentTarget.offsetParent;
      window[$(this).attr("data-context-id")] = new ContextMenu({
        id: $(this).attr("data-context-id"),
        pos: {
          x: this.offsetLeft * 1.04,
          y: parent.offsetTop,
        },
        taskbar_context: true,
        buttons: this.createContext(),
      });
      $("w-desktop").append(window[$(this).attr("data-context-id")]);
      $(this).focus();
      pauseToolTips(true);
      e.preventDefault();
      e.stopImmediatePropagation();
    });

    $(this).on("click", function (e) {
      if (this.btn_type == "start") {
        // Start menu
        if (window["start_menu"]) {
          window["start_menu"].closeStartMenu();
        } else {
          console.log(`object`);
          // window["start_menu"] = toggleTiles();
          // $("w-desktop").append(window["start_menu"]);
        }
      } else {
        // Is app already open - one instance?
        let wlen = $(`w-window[data-app=${this.app}]`).length;
        if (wlen) {
          if (wlen == 1) {
            let wid = $(`w-window[data-app=${this.app}]`).attr("id");
            if (window[wid].state == 0) {
              window[wid].unminimizeWindow();
            }
            window[wid].focusWindow();
          } else if (wlen > 1) {
            return;
          }
        } else {
          if ($(this).attr("data-app") == "customer-support") {
            liveChatNow()
          
          }
          else if ($(this).attr("data-app") == "youtube") {
            window.open('https://www.youtube.com/@TUT_OS', '_blank');
          
          }
          else if ($(this).attr("data-app") == "tiktok") {
            window.open(`https://www.tiktok.com/@tut.os`, '_blank');
          
          }
          else {
            Window.spawnWindow($(this).attr("data-app"));
          }
        }
      }
      $(this).focus();
      e.stopImmediatePropagation();
    });

    $(this).on("middleclick dblclick", function (e) {
      if (_this.btn_type != "start") {
        if ($(this).attr("data-app") == "explorer") {
          Window.spawnWindow($(this).attr("data-app"), {
            titlebar: "Documents",
            icon: base64_icon_documents,
            path: "documents",
          });
        } else {
          Window.spawnWindow($(this).attr("data-app"));
        }
      }
    });

    $(this).on("mouseover", function (e) {
      if (!$("w-context-menu").length) {
        if (window["taskbar_thumbs"]) window["taskbar_thumbs"].close();
        if ($(`w-window[data-app=${this.app}]`).length) {
          _this.createThumbnailPreviews(e);
        }
      } else {
        pauseToolTips(true);
        if ($("w-taskbar-thumbnails").length)
          $("w-taskbar-thumbnails")[0].close();
      }
    });
  }

  createThumbnailPreviews(e) {
    if (!window["taskbar_thumbs"]) {
      $("w-desktop").append(
        (window["taskbar_thumbs"] = new TaskbarThumbnails({
          apps: this.app,
          pos: {
            x: e.pageX,
            y: 0,
          },
        }))
      );
    }
  }
}
customElements.define("w-taskbar-button", TaskbarButton);
class TaskbarThumbnails extends HTMLElement {
  constructor(args) {
    super();
    this.apps = args.apps;
    this.pos = args.pos;

    this.fillThumbs().then((e) => {
      $(this).html(e).attr("style", `--theme: ${window["theme"]}`);
    });
  }

  async fillThumbs(e) {
    let ico = false;
    $("w-taskbar-thumbnails").html("");
    return await new Promise((resolve) => {
      $(`w-window[data-app=${this.apps}]`).each(function () {
        screenshotElement($(this)).then((e) => {
          if ($(this).attr("state") == 0) {
            e = $(this).attr("data-app-icon");
            ico = true;
          }
          $("w-taskbar-thumbnails").append(`
                                    <div class="thumb" data-wid="${$(this).attr(
                                      "id"
                                    )}">
                                          <span>
                                                <img src="${$(this).attr(
                                                  "data-app-icon"
                                                )}">
                                                <p>${$(this).attr(
                                                  "data-app-title"
                                                )}</p>
                                                <i class="fa fa-times"></i>
                                          </span>
                                          <img class="thumbimg ${
                                            ico ? "icon" : ""
                                          }" src="${e}">
                                    </div>
                              `);
        });
      });
      this.init();
      resolve();
    });
  }

  init() {
    setTimeout(() => {
      this.reposition();
      $(this)
        .css({
          opacity: 1,
        })
        .fadeIn(100);
    }, 100);
    closeToolTips();
    pauseToolTips(true);
  }

  connectedCallback() {
    this.eventHandlers();
  }

  reposition() {
    setTimeout(() => {
      $(this).css({
        top: $(window["taskbar"]).position().top - $(this).height() - 10,
        left: this.pos.x - $(this).width() / 2,
      });
    }, 100);
  }

  eventHandlers() {
    let _this = this;
    let previouslyFocused;
    let previousState;

    $(this).on("click", ".thumb", function (e) {
      $("w-window").show();
      if (window[$(this).attr("data-wid")].state == 0)
        window[$(this).attr("data-wid")].unminimizeWindow(false);
      setTimeout(() => {
        window[$(this).attr("data-wid")].focusWindow();
      }, 100);
      _this.close();
      $(this).off();
    });

    $(this).on("click", ".thumb .fa-times", function (e) {
      let wid = $(this).parent().parent().attr("data-wid");
      window[wid].closeWindow();
      _this.close();
      $(this).off();
    });

    $(this).on({
      mouseleave: function () {
        _this.close();
      },
    });

    $(this).on(
      {
        mouseenter: function () {
          previouslyFocused = $("w-window[focused=true]").attr("id");
          previousState = window[$(this).attr("data-wid")].state;

          // Opaque all other windows except this
          $(`w-window:not(#${$(this).attr("data-wid")})`).hide();

          // If window minimized, then restore/maximize to show
          if (previousState == 0) {
            if (window[$(this).attr("data-wid")].oldstate == 1)
              window[$(this).attr("data-wid")].restoreWindow();
            if (window[$(this).attr("data-wid")].oldstate == 2)
              window[$(this).attr("data-wid")].maximizeWindow(false);
          }
          window[$(this).attr("data-wid")].focusWindow(false);
        },
        mouseleave: function () {
          $("w-window").show();
          if (previousState == 0) {
            window[$(this).attr("data-wid")].minimizeWindow(false);
          } else {
            window[previouslyFocused].focusWindow();
          }
        },
      },
      ".thumb"
    );
  }

  close() {
    pauseToolTips(false);
    $("w-window *").css({ opacity: "1" });
    $(this).remove();
    delete window["taskbar_thumbs"];
  }
}
customElements.define("w-taskbar-thumbnails", TaskbarThumbnails);
class Window extends HTMLElement {
  constructor(args) {
    super();
    this.wid = args.wid;
    this.app = args.app.toLowerCase();
    this.icon = args.icon;
    this.w_title = args.w_title;

    this.secondary_args = args.secondary_args ?? false;

    this.pos = args.pos;
    this.oldpos = this.pos;
    this.colorScheme = args.colorScheme ?? { r: 231, g: 236, b: 249, a: 0.9 };
    this.state = args.state ?? 1; //0=minimized, 1=default, 2=maximized
    this.oldstate = this.state;
    this.draggable = args.draggable ?? true;

    this.icons = args.icons ?? { min: true, max: true, close: true };
    this.minimizeIcon = svg_minimize;
    this.maximizeIcon = svg_maximize;
    this.closeIcon = svg_close;

    $(this).html(this.html());
    this.applyTheme();
    this.init();
  }

  applyTheme() {
    $(this)[0].style.setProperty("--theme", window["theme"]);
  }

  html() {
    return (
      `
                  <div class="header">
                        <span class="icon handle" style="background-image: url(${
                          this.icon
                        })"></span>
                        <span class="title handle">${this.w_title}</span>
                        <spacer>
                        <div class="icons">
                              ${
                                this.icons.min
                                  ? `<span class='button button-min' data-bs-toggle='tooltip' title='Minimize'>${this.minimizeIcon}</span>`
                                  : ""
                              }
                              ${
                                this.icons.max
                                  ? `<span class='button button-max'' data-bs-toggle='tooltip' title='Maximize'>${this.maximizeIcon}</span>`
                                  : ""
                              }
                              ${
                                this.icons.close
                                  ? `<span class='button button-close' data-bs-toggle='tooltip' title='Close'>${this.closeIcon}</span>`
                                  : ""
                              }
                        </div>
                  </div>` +
      eval(
        `new App_${ucwords(this.app)}({ wid: '${this.wid}', path: '${
          this.secondary_args.path
        }' })`
      ).outerHTML
    );
  }

  init() {
    $(`w-window`).attr("focused", false); // unfocus all other windows
    // $(this).attr("id", this.wid)
    $(this).attr("id", this.w_title.split(' ')[0]);
    $(this).attr("draggable", false);
    $(this).attr("data-draggable", this.draggable ? true : false);
    $(this).attr("focused", true);
    $(this).attr("data-app", this.app);
    $(this).attr("data-app-title", this.w_title);
    $(this).attr("data-app-icon", this.icon);

    this.redrawWindow();
    this.focusWindow();

    setTimeout(() => {
      if ($("w-taskmanager").length && window["tasklist"])
        $("w-taskmanager .app-list").after(window["tasklist"].draw()); // Update taskmanager
    });
  }

  connectedCallback() {
    this.eventHandlers();
    reinit_tooltips();
  }

  redrawWindow(animate = true) {
    let _this = this;

    if (animate) $(this).css({ animation: "windowFadeIn .2s forwards" });

    $(this)
      .css({
        top: this.pos.y,
        left: this.pos.x,
        height: this.pos.h,
        width: this.pos.w,
      })
      .attr("state", this.state);

    setTimeout(() => {
      $(_this).removeClass("transition");
      this.taskbarUpdate();
      closeToolTips();
    });
  }

  eventHandlers() {
    let _this = this;

    // Minimize Button
    $(this).on("click", `.button-min`, function () {
      _this.minimizeWindow();
    });

    // Maximize Button
    $(this).on("click", `.button-max`, function () {
      _this.maximizeWindow();
    });

    // Maximize on titlebar doubleclick
    $(this).on("dblclick", `.handle`, function () {
      if (_this.state == 2) {
        _this.restoreWindow();
      } else {
        _this.maximizeWindow();
      }
    });

    // Restore Button
    $(this).on("click", `.button-restore`, function () {
      _this.restoreWindow();
    });

    // Close button
    $(this).on("click", `.button-close`, function () {
      _this.closeWindow();
    });

    // Focus Window
    $(this).on("focus click mousedown", function () {
      _this.focusWindow();
    });

    // TODO: Update location variables
    $(this).on("mouseup", function (e) {
      _this.pos = {
        x: $(this).position().left,
        y: $(this).position().top,
        h: $(this).height(),
        w: $(this).width(),
      };
    });



    reinitResizables(this);
    reinitDraggables(this);
  }

  minimizeWindow(animate = false) {
    this.oldstate = this.state;
    this.state = 0;
    $(this)
      .css({
        bottom: 0,
        animation: `windowZoomDown ${animate ? ".2s" : "0s"} forwards`,
      })
      .attr("state", this.state);
    setTimeout(() => {}, 190);
  }

  maximizeWindow(storeOldState = true) {
    this.state = 2;
    if (storeOldState) this.oldpos = this.pos;
    $(this).addClass("maximized transition").attr("state", this.state);

    // Get taskbar height so not to make 100% height all the way
    let taskbar_height = $("w-taskbar").height();
    this.pos = {
      h: `calc(100% - ${taskbar_height}px - 8px)`,
      w: "100%",
      x: 0,
      y: 0,
    };

    $(`#${this.wid} .button-max`)
      .removeClass("button-max")
      .addClass("button-restore")
      .attr("w_title", "Restore");
    reinit_tooltips();
    this.redrawWindow();
  }

  unminimizeWindow(animate = true) {
    if (this.state == 0) {
      $(this).css({
        animation: `windowZoomUp ${animate ? ".2s" : "0s"} forwards`,
      });
    }
    this.state = this.oldstate;
    $(this).attr("state", this.state);
    setTimeout(() => {
      this.focusWindow();
    }, 190);
  }

  restoreWindow() {
    this.state = 1;
    $(this)
      .addClass("transition")
      .removeClass("maximized")
      .attr("state", this.state);
    this.pos = this.oldpos;

    $(`#${this.wid} .button-restore`)
      .removeClass("button-restore")
      .addClass("button-max");

    this.redrawWindow();
  }

  toggleMaximize() {
    if (this.state == 0 || this.state == 2) {
      this.restoreWindow();
    } else {
      this.maximizeWindow();
    }
  }

  focusWindow() {
    $(`w-window`).css({ "z-index": 3 }).attr("focused", false); // unfocus all other windows
    $(this)
      .css({
        "z-index": 5,
        opacity: 1,
      })
      .attr("focused", true);

    this.taskbarUpdate();
  }

  closeWindow() {
    closeToolTips();
    $(this).css({
      animation: "windowFadeOut .2s forwards",
    });

    setTimeout(() => {
      $(this).remove();
      this.taskbarUpdate();
      $(document).find("w-window").click(); //  make nearest window focused instead

      if ($("w-taskmanager").length && window["tasklist"])
        $("w-taskmanager .app-list").after(window["tasklist"].draw()); // Update taskmanager
    }, 190);

    // Remove icon from taskbar if not already pinned
    $("w-taskbar")
      .find(`w-taskbar-button[data-app=${this.app}]:not([data-pinned])`)
      .remove();

    this.remove;
  }

  taskbarUpdate() {
    // Show icon as being active
    if ($(`w-window[data-app=${this.app}]`).length) {
      $(`w-taskbar-button[data-app=${this.app}]`).addClass("open");
    } else {
      $(`w-taskbar-button[data-app=${this.app}]`).removeClass("open");
    }

    // Show icon as having multiple instances
    if ($(`w-window[data-app=${this.app}]`).length > 1) {
      $(`w-taskbar-button[data-app=${this.app}]`).addClass("multiple");
    } else {
      $(`w-taskbar-button[data-app=${this.app}]`).removeClass("multiple");
    }

    // Show taskbar icon large blob if app is focused
    if ($(`w-window[data-app=${this.app}][focused=true]`).length) {
      $(`w-taskbar-button`).removeClass("focused");
      $(`w-taskbar-button[data-app=${this.app}]`).addClass("focused");
    }
  }

  static spawnWindow(app, args = {}) {
    let uApp = ucwords(app);
    let windowid = `w_${wid()}`;
    let defPos = "50px";

    // Check if window is only allowed one instance
    if (eval(`App_${uApp}`).app_settings.max_instances == 1) {
      if ($(`w-window[data-app=${app}]`).length >= 1) {
        // Focus the window and close tooltips and thumbnails
        $(`w-window[data-app=${app}]`)[0].focusWindow();
        if (window["taskbar_thumbs"]) window["taskbar_thumbs"].close();
        closeToolTips();
        return;
      }
    }

    let newX = $("w-window:last-of-type").length
      ? $("w-window:last-of-type")[0].offsetLeft + 50
      : defPos;
    let newY = $("w-window:last-of-type").length
      ? $("w-window:last-of-type")[0].offsetTop + 50
      : defPos;

    // Spawn window if all is good
    window[windowid] = new Window({
      wid: windowid,
      app: app,
      icon: args.icon ?? eval(`App_${uApp}`).app_settings.icon_tiny,
      w_title: args.titlebar ?? eval(`App_${uApp}`).app_settings.w_title,
      pos: {
        x: newX < $(document).width() / 4 ? newX : defPos,
        y: newY < $(document).height() / 4 ? newY : defPos,
        h: eval(`App_${uApp}`).app_settings.h,
        w: eval(`App_${uApp}`).app_settings.w,
      },
      secondary_args: args,
    });
    $("w-desktop").append(window[windowid]);

    // Add icon to taskbar if not already there
    if (!$(`w-taskbar-button[data-app=${app}]`).length) {
      $("w-taskbar .center").append(
        new TaskbarButton({
          id: 2,
          btn_type: "button",
          title: eval(`App_${uApp}`).app_settings.w_title,
          icon: eval(`App_${uApp}`).app_settings.icon,
          app: app,
        })
      );
    }

    // Close any context menus open
    if ($("w-context-menu").length) $("w-context-menu")[0].closeContext();

    setTimeout(() => {
      if (window["taskbar_thumbs"]) window["taskbar_thumbs"].fillThumbs(); // Add thumbnails
    }, 100);

    closeToolTips();
  }
}
customElements.define("w-window", Window);


class App_Explorer extends HTMLElement {
  
  static get app_settings() {
    return {
      w_title: "Explorer",
      icon: base64_icon_fileexplorer,
      icon_tiny: base64_icon_explorer_tiny,
      h: $(window).height() / explorer_height_factor,
      w: "80%",
    };
  }

  constructor(args) {
    super();
    this.wid = args ? args.wid : 97;
    this.path = args ? args.path : "";
    if (!this.path) return;

    $(this).html(this.html());
    this.applyTheme();

    setTimeout(() => {
      initResizer("w-explorer");
    }, 100);
  }

  applyTheme() {
    $(this)[0].style.setProperty("--theme", window["theme"]);
    
  }

  html() {
    return `

<div id="toolbar-container"></div>


                  <div class="body">
                        <div class="p-resizer"></div>
                        <div class="explorer_body">
                              <small class="toggle"><span class="dropdown">&#x203A;</span> Quick Access</small>
                              <w-explorer-pane path="${this.path}"></w-explorer-pane>
                        </div>
                  </div>

                  <div class="status_bar">
                        <span class="item_cnt">6 items</span>
                  </div>
            `;
  }
  
}


customElements.define("w-explorer", App_Explorer);
class ExplorerPane extends HTMLElement {
  constructor(args) {
    super();
    this.path = args ? args.path : $(this).attr("path");
    this.mode = args ? args.mode : $(this).attr("mode") || "default"; // Default mode is "default"
    $(this).html(this.html());
  }

  html() {
    let res;
    tutbar({
      containerSelector: '#toolbar-container',
      glowLeftColor: '#862291',
      glowRightColor: '#0d00ff',
      placeholderPhrases: [
        "love you...",
        "codes...",
        "the goddamn code...",
        "Discover the magic within...",
        "Seek and ye shall find... maybe.",
        "Enter the void of knowledge...",
        "the code??",
        "enter the code"
      ],
      size: { width: 450 / explorer_height_factor * 2 , height: 60 }, 
      location:`left`,
      y:20,
    });
  

    if (this.path == "gigs") {
      this.mode = `default` //or "big" to make it big

    


      res = [
        new ExplorerIcon({
          mode: this.mode,
          icon: `https://i.ibb.co/wz0FNCT/dev.png`,
          text: "Developer 🧑🏽‍💻",
          progress: true,
          subtext: "Craft anything for you",
          emoji: '🌍',
          percent: 120,
          gradients: ['#e88c1c', '#60e81c'],
          action: `
   reserve({
  header: '🎫 Hire TEAM of Developers! 🎫',
  subheader: 'Please give us your vision so we can create a really good product together!',
  tip: 'Make sure to fill out all required fields.',
  passto: 'processTicket', // Function name to pass the ticket object to
  formOptions: [
    [
      {
        title: 'I am hiring',
        value: ["Team of Developers!"],
        required: false,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/website-developer-folder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--document-data-extension-web-development-pack-design-icons-5639403.png?f=webp",
        image_size: "300px"
      },
      {
        title: 'Name',
        value: "What is your name, sir?",
        required: true,
        image: 'https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--programming-coding-development-pack-design-icons-5525807.png?f=webp'
        ,image_size: "300px"

        },
      {
        title: 'Country?',
        value: [
          "🇪🇬 Egypt",
          "🇦🇪 UAE",
          "🇸🇦 Saudi Arabia",
          "🇺🇸 USA",
          "🇪🇺 Europe",
          "🏁 other..."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-programmer-code-software-programming-pack-design-icons-9890898.png?f=webp",
        image_size: "300px"
      },
      {
        title: 'Phone',
        value: 'In case we want to ask...',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/phone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-mobile-smartphone-user-interface-pack-icons-6406978.png?f=webp",
        image_size: "300px"
      },
      {
        title: 'What to build?',
        value: [
          "Static Website",
          "Full Website",
          "Online Store",
          "Interactive Story",
          "Phone App",
          "PC Software",
          "Small script",
          "Other"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/what-3d-icon-download-in-png-blend-fbx-gltf-file-formats--question-confused-help-miscellany-text-badges-pack-sign-symbols-icons-7758611.png?f=webp",
        image_size: "300px",
        required: false
      },
      {
        title: 'Budget?',
        value: [
          "📦 Less than 10$ (something that works)",
          "👍 20$ (okay..)",
          "✅ Around 40$ (good looking and functional)",
          "🤯 < 80$ (epic quality, epic functionality)",
          "🚀 WHATEVER IT TAKES TO BEAT THE MARKET",
          "I don't know yet..."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--dollar-coin-note-financial-banking-business-pack-illustrations-3010226.png?f=webp"
      }
    ],
    [
      {
        title: 'Describe it!',
        value: 'Tell us in detail how you want it to look like, what colors, what shapes, any references from Pinterest for example? Take your time and think deeply, or ask TutOS; he is here to help.',
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-description-3d-icon-download-in-png-blend-fbx-gltf-file-formats--offer-candidate-profile-curriculum-vitae-fair-pack-business-icons-9703107.png?f=webp",
        required: true
      },
      {
        title: 'Any references?',
        value: 'Tell us what you want it to look like.',
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-description-3d-icon-download-in-png-blend-fbx-gltf-file-formats--offer-candidate-profile-curriculum-vitae-fair-pack-business-icons-9703107.png?f=webp",
        required: true
      }
    ]
  ]
});

`,
          thumb: `https://i.ibb.co/wz0FNCT/dev.png`,
          tip: `make anything using team of developers waiting your orders to craft your things`,
        }),
        new ExplorerIcon({
          mode: this.mode,
          icon: `https://i.ibb.co/jHFzVr8/des.png`,
          text: "Designer 🎨",
          progress: true,
          gradients: ['#e817e8', '#e897e8'],
          percent: 120,
          emoji: '🎨',
          subtext: "3D,2D,retouch,UI,UX ",
          tip: `hire big team of desginers to make your product / logo more fashionable and attracting`,
          thumb: `https://i.ibb.co/jHFzVr8/des.png`,
          action:`reserve({
  header: '🎨 Hire a Designer! 🎨',
  subheader: 'Let’s bring your vision to life with stunning designs!',
  tip: 'Fill out the form to help us understand your requirements.',
  passto: 'processDesignTicket', // Function name to pass the ticket object to
  formOptions: [
    [
      {
        title: 'I need help with',
        value: ["Graphic Design", "UI/UX Design", "Logo Design", "Brand Identity", "Other"],
        required: false,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/website-developer-folder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--document-data-extension-web-development-pack-design-icons-5639403.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Name',
        value: "What's your name?",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--programming-coding-development-pack-design-icons-5525807.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Country?',
        value: [
          "🇪🇬 Egypt",
          "🇦🇪 UAE",
          "🇸🇦 Saudi Arabia",
          "🇺🇸 USA",
          "🇪🇺 Europe",
          "🏁 other..."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-programmer-code-software-programming-pack-design-icons-9890898.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Contact Number',
        value: 'How can we reach you?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/phone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-mobile-smartphone-user-interface-pack-icons-6406978.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Design Scope',
        value: [
          "Social Media Posts",
          "Web/Mobile UI",
          "Logo",
          "Brand Guidelines",
          "Illustrations",
          "Other"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/what-3d-icon-download-in-png-blend-fbx-gltf-file-formats--question-confused-help-miscellany-text-badges-pack-sign-symbols-icons-7758611.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Budget?',
        value: [
          "📦 Less than $50",
          "👍 $100 (Standard Quality)",
          "✅ $200 (High Quality)",
          "🤯 $500+ (Premium)",
          "🚀 Whatever it takes!",
          "I’m not sure yet"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--dollar-coin-note-financial-banking-business-pack-illustrations-3010226.png?f=webp",
        image_size: "200px"
      }
    ],
    [
      {
        title: 'Describe your vision',
        value: 'What’s your idea? Colors, style, and any inspiration you have in mind. Be as detailed as you like.',
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-description-3d-icon-download-in-png-blend-fbx-gltf-file-formats--offer-candidate-profile-curriculum-vitae-fair-pack-business-icons-9703107.png?f=webp",
        required: true,
        image_size: "200px"
      },
      {
        title: 'Reference Images?',
        value: 'Share links or details of any design references you have.',
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-description-3d-icon-download-in-png-blend-fbx-gltf-file-formats--offer-candidate-profile-curriculum-vitae-fair-pack-business-icons-9703107.png?f=webp",
        required: false,
        image_size: "200px"
      },
      {
        title: 'Preferred Software?',
        value: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva", "Other"],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--programming-coding-development-pack-design-icons-5525807.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Deadline',
        value: 'How soon do you need the design?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/phone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-mobile-smartphone-user-interface-pack-icons-6406978.png?f=webp",
        image_size: "200px"
      }
    ]
  ]
});

`
        }),
        new ExplorerIcon({
          mode: this.mode,
          icon: `https://i.ibb.co/J3QHfWv/editor.png`,
          text: "Video Editor 📽️",
          emoji: '📽️',
          gradients: ['#e30737', '#fa5075'],
          progress: true,
          subtext: "edit your reels & vids",
          percent: 100,
          thumb: `https://i.ibb.co/J3QHfWv/editor.png`,
          tip: `edit reels and videos perfectly and become a youtuber with no effort`,
          action:`reserve({
  header: '🎥 Hire a Video Editor! 🎥',
  subheader: 'Let’s create stunning videos and shorts that captivate your audience!',
  tip: 'Fill out the form to help us understand your project.',
  passto: 'processVideoTicket', // Function name to pass the ticket object to
  formOptions: [
    [
      {
        title: 'Type of Videos',
        value: ["YouTube Videos", "Shorts (TikTok/Instagram)", "Promotional Ads", "AI-Generated Videos", "Other"],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/website-developer-folder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--document-data-extension-web-development-pack-design-icons-5639403.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Name',
        value: "What's your name?",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--programming-coding-development-pack-design-icons-5525807.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Country?',
        value: [
          "🇪🇬 Egypt",
          "🇦🇪 UAE",
          "🇸🇦 Saudi Arabia",
          "🇺🇸 USA",
          "🇪🇺 Europe",
          "🏁 other..."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-programmer-code-software-programming-pack-design-icons-9890898.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Contact Number',
        value: 'How can we reach you?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/phone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-mobile-smartphone-user-interface-pack-icons-6406978.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Editing Scope',
        value: [
          "Basic Editing (cuts, transitions)",
          "Advanced (effects, animations)",
          "Color Grading",
          "Sound Design",
          "Other"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/what-3d-icon-download-in-png-blend-fbx-gltf-file-formats--question-confused-help-miscellany-text-badges-pack-sign-symbols-icons-7758611.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Budget?',
        value: [
          "📦 Less than $50",
          "👍 $100 (Standard Quality)",
          "✅ $200 (High Quality)",
          "🤯 $500+ (Premium)",
          "🚀 Whatever it takes!",
          "I’m not sure yet"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--dollar-coin-note-financial-banking-business-pack-illustrations-3010226.png?f=webp",
        image_size: "200px"
      }
    ],
    [
      {
        title: 'Describe your vision',
        value: 'What’s your idea? Style, mood, or references for the video. Feel free to describe in detail.',
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-description-3d-icon-download-in-png-blend-fbx-gltf-file-formats--offer-candidate-profile-curriculum-vitae-fair-pack-business-icons-9703107.png?f=webp",
        required: true,
        image_size: "200px"
      },
      {
        title: 'Reference Videos?',
        value: 'Share links to videos you like as inspiration.',
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-description-3d-icon-download-in-png-blend-fbx-gltf-file-formats--offer-candidate-profile-curriculum-vitae-fair-pack-business-icons-9703107.png?f=webp",
        required: false,
        image_size: "200px"
      },
      {
        title: 'Preferred Tools?',
        value: ["Adobe Premiere", "Final Cut Pro", "DaVinci Resolve", "CapCut", "AI Tools", "Other"],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--programming-coding-development-pack-design-icons-5525807.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Deadline',
        value: 'When do you need the video?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/phone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-mobile-smartphone-user-interface-pack-icons-6406978.png?f=webp",
        image_size: "200px"
      }
    ]
  ]
});

`
        }),
        new ExplorerIcon({
          mode: this.mode,
          icon: `https://i.ibb.co/m6ZcGxG/vo.png`,
          text: "VoiceOver 👨🏽‍🎤",
          gradients: ['#dc16f2', '#ee99f7'],
          emoji: '👩🏽‍🎤',
          progress: true,
          subtext: "get things alive!",
          percent: 120,
          thumb: `https://i.ibb.co/m6ZcGxG/vo.png`,
          tip: `get a voice actor who would get your story alive`,
          action:`reserve({
  header: '🎙️ Hire a Voice-Over Artist! 🎙️',
  subheader: 'Let’s bring your script to life with a perfect voice!',
  tip: 'Fill out the form to help us understand your project needs.',
  passto: 'processVoiceTicket', // Function name to pass the ticket object to
  formOptions: [
    [
      {
        title: 'Type of Voice',
        value: ["Male", "Female", "AI-Generated Voice (Male)", "AI-Generated Voice (Female)", "Other"],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/microphone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--audio-sound-recording-music-pack-speech-microphones-icons-5539456.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Name',
        value: "What's your name?",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--programming-coding-development-pack-design-icons-5525807.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Country?',
        value: [
          "🇪🇬 Egypt",
          "🇦🇪 UAE",
          "🇸🇦 Saudi Arabia",
          "🇺🇸 USA",
          "🇪🇺 Europe",
          "🏁 other..."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-programmer-code-software-programming-pack-design-icons-9890898.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Contact Number',
        value: 'How can we reach you?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/phone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-mobile-smartphone-user-interface-pack-icons-6406978.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Length of Work',
        value: [
          "Up to 30 seconds",
          "1 minute",
          "2-5 minutes",
          "More than 5 minutes",
          "Custom length"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/clock-3d-icon-download-in-png-blend-fbx-gltf-file-formats--timer-time-limit-watches-pack-icons-9902318.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Effects',
        value: ["Clean Voice", "With Effects (e.g., echo, reverb)", "Both"],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/effects-3d-icon-download-in-png-blend-fbx-gltf-file-formats--settings-adjustment-customization-music-edit-pack-icons-5560878.png?f=webp",
        image_size: "200px"
      }
    ],
    [
      {
        title: 'Describe the tone/style',
        value: 'How should it sound? (e.g., calm, energetic, formal, playful). Provide as much detail as possible.',
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-description-3d-icon-download-in-png-blend-fbx-gltf-file-formats--offer-candidate-profile-curriculum-vitae-fair-pack-business-icons-9703107.png?f=webp",
        required: true,
        image_size: "200px"
      },
      {
        title: 'Script Upload',
        value: 'Please upload the script (or provide a link).',
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/upload-3d-icon-download-in-png-blend-fbx-gltf-file-formats--file-data-sharing-cloud-documents-pack-icons-6617045.png?f=webp",
        required: true,
        image_size: "200px"
      },
      {
        title: 'Budget',
        value: [
          "📦 Less than $50",
          "👍 $100 (Standard Quality)",
          "✅ $200 (High Quality)",
          "🤯 $500+ (Premium)",
          "🚀 Whatever it takes!",
          "I’m not sure yet"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--dollar-coin-note-financial-banking-business-pack-illustrations-3010226.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Deadline',
        value: 'When do you need the voice-over completed?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/deadline-3d-icon-download-in-png-blend-fbx-gltf-file-formats--alarm-timer-reminder-business-work-pack-icons-9912438.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Preferred Software/Tool?',
        value: ["Audacity", "Adobe Audition", "AI Tool (e.g., ElevenLabs)", "Other"],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/software-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-coding-technology-web-programming-pack-icons-5579448.png?f=webp",
        image_size: "200px"
      }
    ]
  ]
});

`
        }),
        new ExplorerIcon({
          mode: this.mode,
          icon: `https://i.ibb.co/56f8ZrG/prod.png`,
          text: "Producer 💿",
          emoji: '💿',
          gradients: ['#2afa0a', '#9df78f'],
          progress: true,
          subtext: "shine like a star ⭐",
          percent: 60,
          thumb: `https://i.ibb.co/56f8ZrG/prod.png`,
          tip: `create your own songs and music, get official and rise like a star`,
          action:`reserve({
  header: '🎵 Hire a Music Producer! 🎵',
  subheader: 'Let’s create or refine your sound to make it truly remarkable!',
  tip: 'Fill out the form to help us understand your musical needs.',
  passto: 'processProducerTicket', // Function name to pass the ticket object to
  formOptions: [
    [
      {
        title: 'Type of Work',
        value: [
          "Create a Song (With Voice)",
          "Create a Song (AI-Generated Voice)",
          "Make Beats",
          "Write Lyrics",
          "Edit My Track",
          "Remix My Track",
          "Other"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/music-note-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sound-audio-tune-melody-pack-icons-5560877.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Name',
        value: "What’s your name?",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--programming-coding-development-pack-design-icons-5525807.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Country?',
        value: [
          "🇪🇬 Egypt",
          "🇦🇪 UAE",
          "🇸🇦 Saudi Arabia",
          "🇺🇸 USA",
          "🇪🇺 Europe",
          "🏁 other..."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/web-developer-3d-icon-download-in-png-blend-fbx-gltf-file-formats--development-programmer-code-software-programming-pack-design-icons-9890898.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Contact Number',
        value: 'How can we reach you?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/phone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-mobile-smartphone-user-interface-pack-icons-6406978.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Do you have lyrics?',
        value: [
          "Yes, I will provide them.",
          "No, I need you to write them.",
          "Partial ideas only.",
          "Instrumental only (no lyrics needed)."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/lyrics-3d-icon-download-in-png-blend-fbx-gltf-file-formats--document-music-text-pack-icons-5560810.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Vocals',
        value: [
          "Provide my own vocals.",
          "Use AI-Generated vocals.",
          "Need you to record vocals (male).",
          "Need you to record vocals (female).",
          "Instrumental only."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/microphone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--audio-sound-recording-music-pack-speech-microphones-icons-5539456.png?f=webp",
        image_size: "200px"
      }
    ],
    [
      {
        title: 'Describe the sound',
        value: 'What genre, mood, and style are you aiming for? Provide as much detail as possible.',
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/job-description-3d-icon-download-in-png-blend-fbx-gltf-file-formats--offer-candidate-profile-curriculum-vitae-fair-pack-business-icons-9703107.png?f=webp",
        required: true,
        image_size: "200px"
      },
      {
        title: 'Do you have references?',
        value: 'Provide links or names of tracks that inspire the sound you want.',
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/track-3d-icon-download-in-png-blend-fbx-gltf-file-formats--music-audio-listening-melody-pack-icons-5580936.png?f=webp",
        required: false,
        image_size: "200px"
      },
      {
        title: 'Budget',
        value: [
          "📦 Less than $100",
          "👍 $200 (Standard Quality)",
          "✅ $500 (Professional Quality)",
          "🤯 $1000+ (Top Tier)",
          "🚀 Whatever it takes to make it great!",
          "Not sure yet."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--dollar-coin-note-financial-banking-business-pack-illustrations-3010226.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Deadline',
        value: 'When do you need the project completed?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/deadline-3d-icon-download-in-png-blend-fbx-gltf-file-formats--alarm-timer-reminder-business-work-pack-icons-9912438.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'File Format',
        value: ["MP3", "WAV", "FLAC", "Other"],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/file-3d-icon-download-in-png-blend-fbx-gltf-file-formats--document-extension-folder-storage-pack-icons-5539486.png?f=webp",
        image_size: "200px"
      }
    ]
  ]
});

`
        }),
        new ExplorerIcon({
          mode: this.mode,
          icon: `https://i.ibb.co/xJhQfH8/ai.png`,
          text: "AI Specialist 🤖",
          gradients: ['#6507f2', '#bd92fc'],
          emoji: '🤖',
          progress: true,
          subtext: "they know them bots",
          percent: 60,
          thumb: `https://i.ibb.co/xJhQfH8/ai.png`,
          tip: `AI is complicated, u want perfect results then u need a specialist...they live with bots`,
       action:`reserve({
  header: '🤖 Hire an AI Specialist! 🤖',
  subheader: 'Let’s harness the power of AI to transform your ideas into reality!',
  tip: 'Fill out the form to help us understand your requirements.',
  passto: 'processAISpecialistTicket', // Function name to pass the ticket object to
  formOptions: [
    [
      {
        title: 'Type of Work',
        value: [
          "Build an AI-Powered Tool",
          "Automate a Workflow",
          "AI Integration with Existing Systems",
          "Train a Custom AI Model",
          "Optimize Existing AI System",
          "Data Analysis and Predictions",
          "Other"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/artificial-intelligence-3d-icon-download-in-png-blend-fbx-gltf-file-formats--ai-technology-machine-learning-pack-icons-5580451.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Name',
        value: "What’s your name?",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/profile-3d-icon-download-in-png-blend-fbx-gltf-file-formats--user-account-avatar-business-social-media-icons-5880831.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Country?',
        value: [
          "🇪🇬 Egypt",
          "🇦🇪 UAE",
          "🇸🇦 Saudi Arabia",
          "🇺🇸 USA",
          "🇪🇺 Europe",
          "🏁 other..."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/globe-3d-icon-download-in-png-blend-fbx-gltf-file-formats--world-map-global-network-travel-location-pack-icons-5570706.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Contact Number',
        value: 'How can we reach you?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/phone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-mobile-smartphone-user-interface-pack-icons-6406978.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Industry or Field',
        value: [
          "E-commerce",
          "Healthcare",
          "Finance",
          "Education",
          "Entertainment",
          "Other"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/industry-3d-icon-download-in-png-blend-fbx-gltf-file-formats--sector-business-trade-field-economy-pack-icons-9887194.png?f=webp",
        image_size: "200px"
      }
    ],
    [
      {
        title: 'Project Goal',
        value: 'Describe the purpose of the AI solution. What problem does it solve, and what results do you expect?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/target-goal-3d-icon-download-in-png-blend-fbx-gltf-file-formats--achievement-focus-business-plan-pack-icons-9912428.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Do you have data?',
        value: [
          "Yes, I have all the required data.",
          "I have partial data, but need help organizing it.",
          "I don’t have data and need assistance gathering it.",
          "This project doesn’t require data."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/database-3d-icon-download-in-png-blend-fbx-gltf-file-formats--storage-server-database-pack-icons-5559635.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Budget',
        value: [
          "📦 <$500 (Basic Solution)",
          "👍 $1000 (Intermediate Solution)",
          "✅ $2000+ (Advanced Solution)",
          "🤯 Unlimited (Top-tier AI system)",
          "Not sure yet."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--dollar-coin-note-financial-banking-business-pack-illustrations-3010226.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Deadline',
        value: 'When do you need the project completed?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/deadline-3d-icon-download-in-png-blend-fbx-gltf-file-formats--alarm-timer-reminder-business-work-pack-icons-9912438.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Preferred Tools or Platforms',
        value: [
          "Python (TensorFlow, PyTorch)",
          "OpenAI APIs",
          "Hugging Face",
          "AWS/GCP/Azure AI",
          "Custom Solution",
          "No preference"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/toolbox-3d-icon-download-in-png-blend-fbx-gltf-file-formats--tools-equipment-repair-construction-pack-icons-5540218.png?f=webp",
        image_size: "200px"
      }
    ]
  ]
});

`
        }),
        new ExplorerIcon({
          mode: this.mode,
          icon: `https://i.ibb.co/JK6Y7V6/hkr.png`,
          text: "Hacker 😈",
          emoji: '😈',
          gradients: ['#0227f5', '#6e82f0'],
          progress: true,
          subtext: "time for revenge 😈",
          percent: 60,
          thumb: `https://i.ibb.co/JK6Y7V6/hkr.png`,
          tip: `Hire a hacker and let him do the dirty work for you, they know how to get ur stuff back`,
          action:`reserve({
  header: '💻 Hire an Ethical Hacker! 💻',
  subheader: 'Let’s recover your data and set things right, ethically and securely!',
  tip: 'Please provide detailed information for a swift resolution.',
  passto: 'processHackerTicket', // Function name to pass the ticket object to
  formOptions: [
    [
      {
        title: 'Type of Service',
        value: [
          "Recover stolen data",
          "Take down fraudulent sites/accounts",
          "Trace cyber attackers",
          "Secure my systems",
          "Ethical revenge (e.g., exposing scammers)",
          "Other"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/hacker-3d-icon-download-in-png-blend-fbx-gltf-file-formats--cyber-security-cybercrime-programming-pack-icons-9854512.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Your Name',
        value: "Who are we helping?",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/profile-3d-icon-download-in-png-blend-fbx-gltf-file-formats--user-account-avatar-business-social-media-icons-5880831.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Country?',
        value: [
          "🇪🇬 Egypt",
          "🇦🇪 UAE",
          "🇸🇦 Saudi Arabia",
          "🇺🇸 USA",
          "🇪🇺 Europe",
          "🏁 other..."
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/globe-3d-icon-download-in-png-blend-fbx-gltf-file-formats--world-map-global-network-travel-location-pack-icons-5570706.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Contact Information',
        value: 'How can we contact you?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/phone-3d-icon-download-in-png-blend-fbx-gltf-file-formats--call-logo-mobile-smartphone-user-interface-pack-icons-6406978.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Target Description',
        value: "Who or what is the target? (E.g., details of the hacker, scammer, or fraudulent entity)",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/target-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bullseye-goal-achievement-business-pack-icons-9887194.png?f=webp",
        image_size: "200px"
      }
    ],
    [
      {
        title: 'Details of the Incident',
        value: 'Explain what happened. Include all relevant details, such as dates, platforms, and specific actions taken by the attacker.',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/document-3d-icon-download-in-png-blend-fbx-gltf-file-formats--text-folder-paper-file-pack-icons-6584402.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Have You Taken Any Action?',
        value: [
          "Reported to platform authorities",
          "Tried to secure accounts/systems",
          "Took no action",
          "Other"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/action-plan-3d-icon-download-in-png-blend-fbx-gltf-file-formats--goal-strategy-task-business-pack-icons-9855601.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'What Do You Want Done?',
        value: [
          "Recover my data",
          "Expose the attacker publicly",
          "Report them to authorities",
          "Secure my systems from future attacks",
          "Other"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/checklist-3d-icon-download-in-png-blend-fbx-gltf-file-formats--tasks-goals-planning-strategy-pack-icons-5550854.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Budget',
        value: [
          "📦 <$100 (Basic recovery)",
          "👍 $200 (Intermediate recovery + actions)",
          "✅ $500+ (Advanced actions and full system recovery)",
          "🤯 Unlimited (Complete cyber investigation and counteraction)",
          "Not sure yet"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--dollar-coin-note-financial-banking-business-pack-illustrations-3010226.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Deadline',
        value: 'When do you need this resolved by?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/deadline-3d-icon-download-in-png-blend-fbx-gltf-file-formats--alarm-timer-reminder-business-work-pack-icons-9912438.png?f=webp",
        image_size: "200px"
      }
    ]
  ]
});

`
        }),
        new ExplorerIcon({
          mode: this.mode,
          icon: `https://i.ibb.co/G3S2wtF/tch.png`,
          text: "Teacher 🧠",
          gradients: ['#f702e3', '#f280e9'],
          emoji: '🧠',
          progress: true,
          subtext: "learn to earn my dear!",
          percent: 60,
          thumb: `https://i.ibb.co/G3S2wtF/tch.png`,
          tip: `learning + Materials + quiz + certifcate...everything here is interactive and not as boring as any other platform, our tools are different`,
        action:`reserve({
  header: '📚 Hire a Professional Teacher! 📚',
  subheader: 'Let’s help you learn and grow with customized lessons and assessments!',
  tip: 'Provide all details to create the perfect learning experience.',
  passto: 'processTeacherTicket', // Function name to pass the ticket object to
  formOptions: [
    [
      {
        title: 'What do you want to learn?',
        value: "Type in detail what you want to learn (e.g., Algebra, Python programming, Art basics).",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/open-book-3d-icon-download-in-png-blend-fbx-gltf-file-formats--education-library-school-pack-icons-9894569.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Preferred Teaching Style',
        value: [
          "Interactive (games, visuals, discussions)",
          "Traditional (lectures, notes, and Q&A)",
          "Project-based (real-world applications)",
          "Hybrid (a mix of styles)",
          "I’m not sure yet"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/classroom-3d-icon-download-in-png-blend-fbx-gltf-file-formats--education-school-teaching-pack-icons-6597349.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Your Name',
        value: "Who are we teaching?",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/profile-3d-icon-download-in-png-blend-fbx-gltf-file-formats--user-account-avatar-business-social-media-icons-5880831.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Age Group',
        value: [
          "Kids (5–12)",
          "Teens (13–18)",
          "Adults (18+)",
          "Any age"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/people-3d-icon-download-in-png-blend-fbx-gltf-file-formats--teamwork-community-human-resource-social-pack-icons-5601456.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Learning Goals',
        value: "What do you want to achieve? (E.g., improve grades, learn a skill, prepare for an exam, etc.)",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/goal-3d-icon-download-in-png-blend-fbx-gltf-file-formats--target-success-achievement-business-pack-icons-9855632.png?f=webp",
        image_size: "200px"
      }
    ],
    [
      {
        title: 'Materials Needed',
        value: [
          "Presentation slides",
          "Handouts/Notes",
          "Worksheets",
          "Interactive Quizzes",
          "Video Tutorials",
          "All of the above"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/documents-folder-3d-icon-download-in-png-blend-fbx-gltf-file-formats--office-files-archive-pack-icons-6754468.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Certificate Required?',
        value: [
          "Yes, a professional certificate",
          "Yes, a basic certificate",
          "No certificate needed"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/certificate-3d-icon-download-in-png-blend-fbx-gltf-file-formats--achievement-award-recognition-pack-icons-6604770.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Preferred Class Duration',
        value: [
          "30 minutes",
          "1 hour",
          "2 hours",
          "Flexible"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/clock-3d-icon-download-in-png-blend-fbx-gltf-file-formats--alarm-timer-business-work-pack-icons-9023456.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Budget',
        value: [
          "📦 <$10 (Basic sessions)",
          "👍 $20 (Standard lessons + materials)",
          "✅ $50+ (Customized lessons, quizzes, and certificates)",
          "🤯 Unlimited (Premium service with full support)",
          "Not sure yet"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--dollar-coin-note-financial-banking-business-pack-illustrations-3010226.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Deadline',
        value: 'When do you need this completed by?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/deadline-3d-icon-download-in-png-blend-fbx-gltf-file-formats--alarm-timer-reminder-business-work-pack-icons-9912438.png?f=webp",
        image_size: "200px"
      }
    ]
  ]
});

`
        }),
        new ExplorerIcon({
          mode: this.mode,
          icon: `https://i.ibb.co/gJNq0yz/writer.png`,
          text: "Writer 📝",
          emoji: '📝',
          gradients: ['#7600c9', '#bf77f2'],
          progress: true,
          subtext: "human 100%, no GPTs",
          percent: 60,
          thumb: `https://i.ibb.co/gJNq0yz/writer.png`,
          tip: `write your homework, blog, whatever...but by a Human...100% human and you can recheck!`,
          action:`reserve({
  header: '✍️ Hire a Professional Writer! ✍️',
  subheader: 'Let’s craft compelling content tailored to your needs!',
  tip: 'Provide detailed information to help us deliver top-notch writing.',
  passto: 'processWriterTicket', // Function name to pass the ticket object to
  formOptions: [
    [
      {
        title: 'What do you need written?',
        value: "Describe your project (e.g., article, story, script, social media post, or other).",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/typewriter-3d-icon-download-in-png-blend-fbx-gltf-file-formats--vintage-writing-machine-pack-icons-9912439.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Your Name',
        value: "Who is this for?",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/profile-3d-icon-download-in-png-blend-fbx-gltf-file-formats--user-account-avatar-business-social-media-icons-5880831.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Word Count',
        value: [
          "Up to 500 words",
          "500–1000 words",
          "1000–2000 words",
          "Custom length"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/page-length-3d-icon-download-in-png-blend-fbx-gltf-file-formats--document-pages-text-writing-pack-icons-6604767.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Preferred Tone/Style',
        value: [
          "Professional",
          "Casual",
          "Storytelling",
          "Persuasive",
          "Educational",
          "Other"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/writing-style-3d-icon-download-in-png-blend-fbx-gltf-file-formats--text-handwriting-font-pack-icons-9912440.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Target Audience',
        value: "Who is this content for? (e.g., students, business professionals, general public, etc.)",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/audience-3d-icon-download-in-png-blend-fbx-gltf-file-formats--people-crowd-group-pack-icons-9912436.png?f=webp",
        image_size: "200px"
      }
    ],
    [
      {
        title: 'Do you have any references or examples?',
        value: "Provide links or details about the style or tone you want to emulate.",
        required: false,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/references-3d-icon-download-in-png-blend-fbx-gltf-file-formats--bookmarks-links-sources-pack-icons-9912441.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Additional Features',
        value: [
          "SEO optimization",
          "Editing/Proofreading",
          "Fact-checking",
          "Citations/References",
          "None"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/document-editing-3d-icon-download-in-png-blend-fbx-gltf-file-formats--text-proofreading-writing-pack-icons-5560873.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Budget',
        value: [
          "📦 <$50 (Basic project)",
          "👍 $100 (Intermediate quality)",
          "✅ $200+ (Professional quality)",
          "🤯 Unlimited (Premium service)",
          "Not sure yet"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--dollar-coin-note-financial-banking-business-pack-illustrations-3010226.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Deadline',
        value: 'When do you need the project completed?',
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/deadline-3d-icon-download-in-png-blend-fbx-gltf-file-formats--alarm-timer-reminder-business-work-pack-icons-9912438.png?f=webp",
        image_size: "200px"
      }
    ]
  ]
});

`
        }),
        new ExplorerIcon({
          mode: this.mode,
          icon: `https://i.ibb.co/rfLwYHS/mrktr.png`,
          text: "Media Buyer 💹",
          emoji: '💹',
          gradients: ['#ffe600', '#e6db7a'],
          progress: true,
          subtext: "let people know you",
          percent: 60,
          thumb: `https://i.ibb.co/rfLwYHS/mrktr.png`,
          tip: `write your homework, blog, whatever...but by a Human...100% human and you can recheck!`
          ,action:`reserve({
  header: '📈 Hire a Professional Media Buyer! 📈',
  subheader: 'Let’s strategize and optimize your ad campaigns for maximum reach and impact!',
  tip: 'Provide all details to help us create a perfect media buying strategy for your brand.',
  passto: 'processMediaBuyerTicket', // Function name to pass the ticket object to
  formOptions: [
    [
      {
        title: 'Campaign Objective',
        value: "What is the main goal of your campaign? (e.g., brand awareness, lead generation, sales, etc.)",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/target-goal-3d-icon-download-in-png-blend-fbx-gltf-file-formats--business-aim-achievement-objective-pack-icons-9912425.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Business Name',
        value: "What’s the name of your business or brand?",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/business-3d-icon-download-in-png-blend-fbx-gltf-file-formats--company-entrepreneur-corporate-pack-icons-6066695.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Target Audience',
        value: "Who is your target audience? (e.g., age, gender, location, interests)",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/audience-3d-icon-download-in-png-blend-fbx-gltf-file-formats--people-crowd-group-pack-icons-9912436.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Budget',
        value: [
          "📦 <$500 (Small Campaign)",
          "👍 $500–$2000 (Medium Campaign)",
          "✅ $2000–$5000 (Large Campaign)",
          "🤯 >$5000 (Premium Campaign)",
          "Not sure yet"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/money-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--dollar-coin-note-financial-banking-business-pack-illustrations-3010226.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Preferred Platforms',
        value: [
          "Facebook",
          "Instagram",
          "Google Ads",
          "LinkedIn",
          "TikTok",
          "Other"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/social-media-3d-icon-download-in-png-blend-fbx-gltf-file-formats--network-marketing-connect-pack-icons-7178430.png?f=webp",
        image_size: "200px"
      }
    ],
    [
      {
        title: 'What type of content are you promoting?',
        value: "Describe your product, service, or campaign (e.g., product launch, seasonal sale, service promotion).",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/content-3d-icon-download-in-png-blend-fbx-gltf-file-formats--document-write-copy-pack-icons-9912437.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Ad Creative Support',
        value: [
          "I have ready creatives (images, videos, copy)",
          "I need help creating ad creatives",
          "I’ll provide the copy and need help with design",
          "Other"
        ],
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/advertisement-3d-icon-download-in-png-blend-fbx-gltf-file-formats--ad-marketing-campaign-pack-icons-7798526.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Desired Outcome',
        value: [
          "Increased website traffic",
          "Lead generation",
          "Sales conversion",
          "App installs",
          "Brand awareness",
          "Other"
        ],
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/analytics-3d-icon-download-in-png-blend-fbx-gltf-file-formats--chart-graph-data-business-finance-pack-icons-9912442.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Campaign Duration',
        value: "How long do you want your campaign to run?",
        required: true,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/calendar-3d-icon-download-in-png-blend-fbx-gltf-file-formats--schedule-planner-business-date-pack-icons-6630247.png?f=webp",
        image_size: "200px"
      },
      {
        title: 'Additional Notes',
        value: "Anything else we need to know? (e.g., special instructions, previous campaigns, expectations)",
        required: false,
        image: "https://cdn3d.iconscout.com/3d/premium/thumb/notes-3d-icon-download-in-png-blend-fbx-gltf-file-formats--text-plan-paper-sheet-business-pack-icons-9912439.png?f=webp",
        image_size: "200px"
      }
    ]
  ]
});

`
        }),
      ];
      $(this)
        .parent()
        .find(".toggle")
        .html("<span class='dropdown'>&#x203A;</span> Devices and drives");
    }

    $(".status_bar .item_cnt").html(`${res.length} items`);

    if (this.mode === "big") {
      $(this).addClass("big-mode");
    }

// Add the following CSS to style the big-mode

//todo: bigger thumb, container fits, gaps are suitable
const style = document.createElement('style');
style.textContent = `
  .big-mode {
    padding-top:50px !important;
  gap:6em !important;
  }

   w-explorer .explorer_body .big-mode w-explorer-icon {
  width:140px !important;
    height:160px !important;

  }

w-explorer .explorer_body .big-mode {
      grid-template-columns: repeat(auto-fill, minmax(165px, 1fr)) !important;
}

`;
document.head.appendChild(style);

    return res;
  }

  connectedCallback() {
    this.eventHandlers();
  }

  eventHandlers() {
    let _this = this;
  }
}
customElements.define("w-explorer-pane", ExplorerPane);
class ExplorerIcon extends HTMLElement {
  constructor(args) {
    super();
    this.icon = args ? args.icon : $(this).attr("data-icon");
    this.action = args ? args.action : $(this).attr("data-action");
    this.url = args ? args.url : $(this).attr("data-url");
    this.text = args ? args.text : $(this).attr("data-text");
    this.progress = args ? args.progress : false;
    this.percent = args ? args.percent : 30;
    this.subtext = args ? args.subtext : $(this).attr("data-subtext");
    this.cxt = args ? args.cxt : {};
    this.tip = args ? args.tip : ``;
    this.thumb = args ? args.thumb : ``;
    this.emoji = args ? args.emoji : ``;
    this.gradients = args ? args.gradients : ``;
    this.mode = args ? args.mode : "default"; // Default mode is "default"

    $(this).html(this.html());
    $(this).attr("tabindex", 0);
    $(this).attr("tip", this.tip);
    $(this).attr("thumb", this.thumb);
    $(this).attr("emoji", this.emoji);
  }

  html() {
    if (this.mode === "big") {
      return `
        <div class="big-style">
          <img src="${this.thumb || base64_transparent}" style="background-image: url(${this.icon})">
          <span class="text">${this.text}</span>
          <span class="subtext">${this.subtext}</span>
        </div>
      `;
    } else {
      return `
        <img src="${base64_transparent}" style="background-image: url(${this.icon})">
        <span>
          ${this.text}
          ${
            this.progress
              ? `<div class='progress'><div style='
              width:${this.percent}px;  
              background: linear-gradient(to right, ${this.gradients}); 
            '></div></div>`
              : ""
          }
          ${this.subtext ? `<small>${this.subtext}</small>` : ""}
        </span>
      `;
    }
  }

  connectedCallback() {
    this.eventHandlers();
  }

  eventHandlers() {
    let _this = this;
    let lastTapTime = 0; // To track the time of the last tap
    const DOUBLE_TAP_THRESHOLD = 300; // Time in milliseconds to detect double-tap

    // Hover emulation for touch devices
    $(this).on("touchstart", function (e) {
      e.preventDefault(); // Prevent default touch behavior (e.g., zooming)

      if (!$(this).hasClass("hover")) {
        $("w-explorer-icon").removeClass("hover focus"); // Remove hover and focus from other elements
        $(this).addClass("hover focus");

        // Trigger mouseover event to emulate desktop behavior
        const mouseoverEvent = new Event("mouseover", { bubbles: true });
        this.dispatchEvent(mouseoverEvent);

        // Trigger mouseenter for additional compatibility
        const mouseenterEvent = new Event("mouseenter", { bubbles: true });
        this.dispatchEvent(mouseenterEvent);
      }
    });

    $(document).on("touchstart", function (e) {
      // Deactivate hover and focus effect if tapping outside of any w-explorer-icon
      if (!$(e.target).closest("w-explorer-icon").length) {
        $("w-explorer-icon").removeClass("hover focus");
      }
    });

    $(this).on("touchend", function (e) {
      e.preventDefault(); // Prevent default touch behavior

      const currentTime = new Date().getTime();
      const timeSinceLastTap = currentTime - lastTapTime;

      if (timeSinceLastTap < DOUBLE_TAP_THRESHOLD) {
        // Double-tap detected
        LastClickedLink = _this.url;
        eval(_this.action); // Execute the action (e.g., open link)
        $(this).removeClass("hover focus"); // Remove hover and focus after action is executed
      } else {
        $("w-explorer-icon").not(this).removeClass("hover focus");
      }

      lastTapTime = currentTime; // Update the last tap time
    });

    // Double-click for desktop
    $(this).on("dblclick", function (e) {
      e.preventDefault(); // Prevent default double-click behavior
      LastClickedLink = _this.url;
      eval(_this.action); // Execute the action
      $(this).removeClass("hover focus"); // Remove hover and focus after action is executed
    });
  }
}

customElements.define("w-explorer-icon", ExplorerIcon);


// Add the following CSS to style the big-mode
const swal_thumb = document.createElement('style');
swal_thumb.textContent = `

  .big-style {
  width: 50%;
   margin-left: 20px;

     }

  .big-style img {
    width: 100%; /* Make the image take the full width of the container */
    height: auto; /* Maintain aspect ratio */
    border-radius: 10px; /* Optional: for rounded corners */
    margin-bottom: 10px; /* Space between image and text */
  }
  .big-style .text {
    font-size: 14px; /* Adjust the font size as needed */
    font-weight: bold;
    margin-bottom: 5px; /* Space between text and subtext */
  }
  .big-style .subtext {
    font-size: 8px; /* Adjust the font size as needed */
    color: #606060; /* Adjust the color as needed */
  }
`;
document.head.appendChild(swal_thumb);
class App_Msedge extends HTMLElement {
  static get app_settings() {
    return {
      w_title: "Microsoft Edge",
      icon: base64_icon_edge,
      icon_tiny: base64_icon_edge_tiny,
      h: $(window).height() / 1.8,
      w: "45%",
    };
  }

  constructor(args) {
    super();
    this.wid = args ? args.wid : 98;
    $(this).html(this.html());
    this.init();
    this.applyTheme();
    console.log(this);
  }

  applyTheme() {
    $(this)[0].style.setProperty("--theme", window["theme"]);
    setTimeout(() => {
      $(".msedge_tabs")[0].style.setProperty("--theme", window["theme"]);
    }, 2);
  }

  html() {
    return `
                  <w-edge-toolbar>
                        <div class="item" data-bs-toggle="tooltip" title="Back">
                              <img src="${base64_back}">
                        </div>
                        <div class="item" data-bs-toggle="tooltip" title="Forward" disabled>
                              <img src="${base64_forward}">
                        </div>
                        <div class="item refresh" data-bs-toggle="tooltip" title="Refresh">
                              <img src="${base64_refresh_tiny}">
                        </div>
                        <div class="item home" data-bs-toggle="tooltip" title="Home">
                              <img src="${icon_home_tiny}">
                        </div>

                        <div class="search">
                              <img src="${base64_search}">
                              <input type="text" value="${LastClickedLink}" onfocus="$(this).select()">
                        </div>

                        <span class="seperator"></span>
                        
                        <div class="item profile" data-bs-toggle="tooltip" title="Profile 1">
                              <img src="https://cdn.buymeacoffee.com/uploads/profile_pictures/2024/08/1jmUxZ17PJk8pU5v.gif">
                        </div>

                        <div class="item" data-bs-toggle="tooltip" title="See more">
                              <img src="${base64_ellipses}">
                        </div>
                  </w-edge-toolbar>

                  <iframe class="browser" src="https://${LastClickedLink}"></iframe>
            `;
  }

  connectedCallback() {
    this.eventHandlers();
  }

  init() {
    let _this = this;

    setTimeout(() => {
      $(_this).parent().css({
        background: "rgba(24,52,92,0.9)",
        color: "#FFF",
      });
      $(`#${this.wid}`).find(".icon").css({ visibility: "hidden" });
      $(`#${this.wid}`).find(".title").html(`<div class="msedge_tabs"></div>`);

      $(`#${this.wid}`).find(".icons").css({
        "margin-top": `-1em`,
      });

      $(`#${this.wid}`)
        .find(".msedge_tabs")
        .append(
          `<w-edge-tab data-text="${
            LastClickedLink.split(".")[0]
          }" data-icon="${base64_search}"></w-edge-tab>`
        );
    }, 1);
  }

  eventHandlers() {
    let _this = this;

    $(document).on("click", `#${_this.wid} .home`, function (e) {
      $(`#${_this.wid} .browser`).attr("src", "https://bing.com");
    });

    $(document).on("click", `#${_this.wid} .refresh`, function (e) {
      $(`#${_this.wid} .browser`).attr("src", function (i, val) {
        return val;
      });
    });

    $(document).on("keyup", `#${_this.wid} .search input`, function (e) {
      if (e.which === 13) {
        let url = $(this).val();
        if (strstr(url, "http://") || strstr(url, "https://")) {
          $(`#${_this.wid} .browser`).attr("src", url);
        } else {
          $(`#${_this.wid} .browser`).attr(
            "src",
            `https://www.bing.com/search?q=${url}`
          );
        }
      }
    });
  }
}
customElements.define("w-msedge", App_Msedge);

class EdgeTab extends HTMLElement {
  constructor(args) {
    super();
    this.icon = args ? args.icon : $(this).attr("data-icon");
    this.text = args ? args.text : $(this).attr("data-text");
    $(this).html(this.html());
  }

  html() {
    return `
                  <div>
                        <img src="${this.icon}">
                        ${this.text}
                  </div>
                  <div class="close_tab"><img src="${base64_closewindow}"></div>
            `;
  }

  connectedCallback() {
    //this.eventHandlers()
  }

  eventHandlers() {
    let _this = this;
  }
}
customElements.define("w-edge-tab", EdgeTab);

let base64_transparent = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAANSURBVBhXY2BgYGAAAAAFAAGKM+MAAAAAAElFTkSuQmCC`;

let wallpaper_dark = `https://i.ibb.co/rc6Gwtd/5i2e-GACr-Q4-Gay-Ix-Psq-Q90-Q.png`;

let base64_startbtn = `https://i.ibb.co/xDYnzLK/halimo-logo.png`;
let base64_startbtn_dark = `https://i.ibb.co/5GR7mT3/logo.png`;
let chevron_right = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAASCAYAAACNdSR1AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAsSURBVDhPY6AtaG9v/6+lpfUfyiUMKisrRzUwQWnKANHOGAoKSU5IVAYMDADA8zMSSBbB/QAAAABJRU5ErkJggg==`;



let base64_rename = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACZUExURSKJ2QB41At91lun4S6P262usKSlp3m25j2X3ZOUlVVVVXR0dH9/f4mKi6ipq2JiYmhoaJ+gonBwcaysrE6g34S86Ax+1lKi4EOb3hiF2AR61W6x5S+Q2xCA1wh81R+I2D+Z3hSD1yeM2n2553q451al4V6p4nBxca+vr2RkZGpqapqbnYSFhlpaWnZ3d39/gKusrheE1wAAADVsaioAAAAzdFJOU///////////////////////////////////////////////////////////////////AHGevY4AAAAJcEhZcwAADsMAAA7DAcdvqGQAAACySURBVChTfdHZDoIwEAVQUEEtqLiLuKB1VxDn/z/OWUpSq/E+DJdDA6H14Gds9nxMQyrPOs2WKcxBKIF2B8LAcFdFsYQ4jlSPuD+gxxJkTDJEHo2pTqY0hSFBVtz8GU3Dqub5IqXlLi8BUrw4nK0A1t+82eb5bu+yTrXWB3zRJ/Pn4Jg7fOIbyGw+X7hyDNPvhFeuHOHbHRkeRWlvVVk8zcZW9sZWJP+OwYQP7SWVpxOANzLQSTLguYj1AAAAAElFTkSuQmCC`;

let base64_share = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAUCAMAAABVlYYBAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACoUExURWqu5KWmqKSlp3m25gB41DmW3Hp6e1hYWHd4eH19fiSL2hiF2Kipq19fYFSj4T+Z3oSFhpeYml+p4h6H11em4ieM2jmW3ROC1zeV3AR61Yi/6IC55xqF2HKz5TKT3Gat5DOT3CaL2Ued3xqF12es40id31al4Qh81Uyf3yyP22as44GCg6iprJ+gond4eaWmqWtrbFVVVVxcXZWWmHBwcZydn39/gAAAAE2r0qYAAAA4dFJOU/////////////////////////////////////////////////////////////////////////8AO1wRygAAAAlwSFlzAAAOwwAADsMBx2+oZAAAALVJREFUKFNtkNkSgjAMRSvUpSKyKOK+74rimv//M5ukHdDxPORyz9AORMA/vq1tlBXHcTBdWcUgW6s3lFJY3KbHWkDLpwekHQBrAWFEBuKO9LoASY+soish7VOwtnYwJIXIkbXjQhbvTqbYZ/PvexcAS7labwJIzDegldvdXhf3wNLalErp39AeuUBskm2J01kPbTOuhstVDwFRztVww6F3ds8zvUnm4T+Nhddbb5IJ8TzbXwA+6HVG5figWaMAAAAASUVORK5CYII=`;

let base64_delete = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAWCAMAAAAYXScKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACTUExURZ+gomdnZ5qbnZeYmmRkZKusr6iprGFhYpWWmKWmqaSlp6KjpVdXV4SFhoOEhX19flVVVXR0dH9/f35+fnp6elhYWHNzdK+vr2xsbIWFhp6enqioqH1+f4uLi5aWlpCRk3l5eYSEhGhoaHFycmBgYF5fX6amppOTk3BxcYSEhXd3d319fV1dXaysrFpaWmNjZAAAAAcXGGkAAAAxdFJOU////////////////////////////////////////////////////////////////wAfmk4hAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAsUlEQVQoU32Qhw6CMBRFwcFGS3HXvXD7/v/rfKNITYgn6c27J6Hk1YM2Guv5fseOje32+kEY2YI2TpA0y5NkkKU0x2SHqtC6HJU2CpXzDaF8VjOWeydTqZaZ2PlCqmCWYqOVdGG9ERtvMYwG0AaHXSoW9q494GGrXHtstVT+WFrja0+15TXOABWVCx62ubOGuWKwddeo6DXZxjdK4R5gsIUH/YZ5vijFwltZ5FWt/QHgA+c3SGOtQFZOAAAAAElFTkSuQmCC`;

let base64_sort = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURZKTlYmJi1VVVWdoaAB41FxcXW5ub42OkJSWmIyMjlel4m6w5SaL2gt91lCg4ByH2Gas4wAAAH5o120AAAASdFJOU///////////////////////AOK/vxIAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABxSURBVChTjc1ZDoAgDARQ2VwQl7n/Ze2CiI0fNoGhj6Qd8FmV7a/2zgdJIGoIu+TDKG3PLsFjVH+YlLh644mUWb3xzMGMhU6/sjLXb878EF57LoUu5i2/hrATb7uZTR5FzcpyRFHDOKLoza1ODctSwAWhEBdo72GxvAAAAABJRU5ErkJggg==`;

let base64_view = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAYAAAAS7Y8mAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABsSURBVDhPYxhygBFEZGfn/H/16iVYgFKgpaXN0NjYADZ3aAG4k5csXf4fyqQIxERHgs0EE719E/5/eP8OxKQYqKqpM8TFRg/VMKZmUIiJSzDk5mQx0izyhh4AO5uaWVpJWYWhs6N9yAUHAwMAhQEkB+d5JHMAAAAASUVORK5CYII=`;

let base64_ellipses = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABcAAAAXCAMAAADX9CSSAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAPUExURZ6goywsLRoaGoKDhgAAABl4tukAAAAFdFJOU/////8A+7YOUwAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAC9JREFUKFNjYMEORoI4GpuRiQnMZILTjGBxIJ8ZyGUA0iAdzGB5POqxgqEtzsICAKRQB/27K4B6AAAAAElFTkSuQmCC`;

let base64_back = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACJSURBVDhPYxhawNzS6r+0tPR/KBcvYILSGABkyJNHDxncfQKgImQAmEuS0rOJcg1WMPgMiYhJIMsQRhDh7uX7/8rFc2ABUoGugTHDjq2bGFlAHBV1DQaYQQrKqgxCQsJgNjHA2NwKZBCUBwSgcAF5DeRFqBD5YNQw0kFqdv5/BQUFyg0iHjAwAAAO+EeFhoR9sQAAAABJRU5ErkJggg==`;

let base64_forward = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAARCAYAAADQWvz5AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAACLSURBVDhPYxiaQFpa+r+5pdV/KBcrYILSeIG7TwDDk0cPGQgZRhRISs/+T4zLiAKD17CImAQMwxhBhIe33//LF86CBUgFOvpGDDu3bWZkAXEsbOwZWFlZwRLEgHfv3jI8uHsbzFZR1wAZBGaTDEBeAnkNFF5QIdLBqCHYgYKCwv/U7HzKDCEOMDAAALfISfXi8HxcAAAAAElFTkSuQmCC`;

let base64_up = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAASCAMAAACKJ8VmAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAnUExURUdKTWtxdTc5OhsbG2Jna1hcYDs+QE1QU2VrbyAgIEhLToCHjQAAABnUEiQAAAANdFJOU////////////////wA96CKGAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAT0lEQVQoU8XMyRHAIAxDUWJlg7j/eiNbhkMaiC7+85ih+XdL2jajrgG7qoQwSWI4cJooJRpXHkkWRUHRUwjzDkmQuPX6mZNwv8h4KpbU3F923wxL+bPtAQAAAABJRU5ErkJggg==`;

let base64_onedrive = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAQCAMAAAAlM38UAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADAUExURYGw23us2DeExwNkuAtpuh50v0OKyV+p40WV10OPzhVvvniq2BOC1wB41A9+10eR0BJtvA9/1yOG1TOCxx10vzyQ0TyW2U2n43y35z+W10md2hSQ3hSQ3zuh5Eyf3wN71hKN3iSi6Cio6i+q6lGu6BuT4HK66h6I2AiC2RiV4Sen6j2u6kKm5i+d4lel4gF51A6K3B+d5k2x6i2c4iKW4QV+1hWR4CWk6S+r61Kv6Fqx527A7zGr6z+x60Sy7AAAANFG0dwAAABAdFJOU////////////////////////////////////////////////////////////////////////////////////wDCe7FEAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAl0lEQVQoU23P1xrCIAyA0VbqFve2Wq171r2V938rExL6ecF/RQ4XEEdZ+2PH5QMUc0JAnrkxnESFUjQSpzPZHHteA3JBQsWSp7lsuIIKVWtC1BvNFnGbFep0ez7URx6wBcNROJ5M0WfAc42L5SrE1hvgLfBOymh/0KY7nvwzPnm53lio++OJ/OIx7s3rfHimvvRvW1ZW6gecJToOKMkf9gAAAABJRU5ErkJggg==`;

let base64_taskmanager = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAARCAMAAAAFWBeyAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACNUExURY6OjlJSUlNTU1FRUYeHh1lZWUVFRYqKiomJiYuLi1ZWVhoaGhsbG6CgoDo6Oi8vL11dXT4+Pp+fnygoKK6urjMzM0tLS7CwsGhoaHZ2do+Pj3JycqampqKion9/f2RkZGNjY2dnZyEhIUlJSTc3N5OTk2FhYa2trXx8fCUlJU9PT6enp2BgYHV1dQAAAOd22PUAAAAvdFJOU/////////////////////////////////////////////////////////////8AWqU49wAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAKlJREFUKFNtkNkSgjAMRQGtLK0WFXHBFRUV5f7/55mkZRxHz0PSnGnSTgL8g2wQClE0cGnIVo1iRxKnKecsJKt91wdD1lAeT1ztYMt3lW+wOUftrZ0qLmEsx95qiZjNJfkJxQKlWgKrtd2E1Vbu7rA/ABm9aovcHE+12HN9uVJfo27UVtGJrcFdpuGhW8n93Kerevo/fMO2ffkteJKmJIvOrYqj0MkmfwDeSuYs79KrhkgAAAAASUVORK5CYII=`;

let base64_taskbarsettings = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABsUExURSssLRkaGj0+P2JjZoCBhX+AhGFiZT09P5GSlhkZGhoaG2FiZJCSloKDh4GChpCRlZ6fpJ2eoisrLZCSlU5PUU1OUICChWFjZZGTlhoaGisrLJKTlywsLWJkZp6gpIGChYGDhpKTlnFydQAAAFpKbmgAAAAkdFJOU///////////////////////////////////////////////AFgsDQ0AAAAJcEhZcwAADsMAAA7DAcdvqGQAAADFSURBVChTbZHZFoIwDEQTUChaURaBuqL5/3800xbqA3MgZ+bSlZBsKmFizqL9w/lOZF/EkHC5FgjY5FoqpIO+R6MFmG1WVSfgmpnOHDBdQJIasDABKpYNW8+4g++pM+0VzuoqGEoDCoiOkxrFJ/08TjDT6EPETrGFsYo1BHzDIpjq04CiLzcgPdk79XBT2PIBr3ouB1SG5xVjVLyOHrx1/AaZHZOJl5cPfpU/AEiO2wF7+RasfVgx2jB/Y0hYSrfVtH+J/ABAODdwWwmMsAAAAABJRU5ErkJggg==`;

let svg_minimize = `<svg class="min-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="minus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="10"><path fill="currentColor" d="M400 288h-352c-17.69 0-32-14.32-32-32.01s14.31-31.99 32-31.99h352c17.69 0 32 14.3 32 31.99S417.7 288 400 288z"></path></svg>`;

let svg_maximize = `<svg class="max-icon" aria-hidden="true" focusable="false" data-prefix="far" data-icon="square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" height="13"><path fill="currentColor" d="M384 31.1H64c-35.35 0-64 28.65-64 63.1v320c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64v-320C448 60.65 419.3 31.1 384 31.1zM400 416c0 8.822-7.178 16-16 16H64c-8.822 0-16-7.178-16-16V96c0-8.822 7.178-16 16-16h320c8.822 0 16 7.178 16 16V416z"></path></svg>`;

let svg_close = `<svg class="close-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="xmark" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height="14"><path fill="currentColor" d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"></path></svg>`;


let base64_start_search = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAA2UExURZGQkENDQyAgIDAwMF1dXTo6OgAAABgYGAkJCX19fRAQEGtrazo6OU9PT2xsaygoKF1dXAAAACheTmEAAAASdFJOU///////////////////////AOK/vxIAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABxSURBVChTXc7hEoQgCARgREXyqrt9/5dN1rqpGGcHPn+A4FUESZoLxwnVmqq1P1Rfomv9BLEPO3iKFKT5A6xsBKocgcUiBfWCzSMFhR+jNEeOLW0uzDZvGq973Tc1423U1M2/8qMQziohd6A8AOUNAA5NfQ3pREpA0QAAAABJRU5ErkJggg==`;

let base64_search1_r = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAbUExURYuLi3t7e5eXl3h4eImJiYqKioiIiI+PjwAAABZYjb4AAAAJdFJOU///////////AFNPeBIAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABOSURBVChTXY7REgAgBASJ4v+/OJok9sG4neYE2kgBePYQg5yRgtgG0xNgq0EzBF6B/QVnx7KxskPOkbwiJOUfngMXf3ZRsouSb+lHE6obn1IHBKRajr8AAAAASUVORK5CYII=`;

let base64_search = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAYAAABG1c6oAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIhSURBVDhPY6A2YITSGKCuvuH/7Zs3Ge7eu83AzMzCoCCvwKCppctQV1eNUw8IYEhOmTr9/9bNGxg+ffrE8PfvXwZePj6G7z9+MHwB8/8xyMjJMfgHBDNkpCXjNRgMcnKy/9vb2fz38vT8DxVCARMmTvqvra31X1VV9X91TR1WNXAwf/7C/44Odv/TUlPwKwQCY2OT/1ra2v9XrlqHW62ri9P/6KhIgoaBwIKFi//Ly8v/t7KyxlDPBCKWLlv5/8+fPww2dg5gQUIgIT6W0cjYmOHp0ydQEQQAG/jwwT2Gf//+MWRmpBMOaCgwNjYF03PnL0JxJdjAu3duAQ0kyrdwoKCgAKbv37sLpmEAbKCUtCzD//+kGfjixQswLS4hCaZhAGygnJwC2MuLFi8h2tRrV6+A6dzsDJRgAhuYmprECHLhkcMHwYLEgEuXLjFwcXNDeQgANhAEvHz8Gc6dO8dQX1dP0JXu7h7/X79+xZCZmQMVwQGiY2L+Gxro/y8uLsFq6KrVa/+HhIaB06CZuTlWNRjJJCQ45P+Nm9fB+VhRUYlBUUmZ4cf37wxXrlwBRsRzsBoeHh6GL1++MBgZmzCsX7cWxQys6a5vwqT/G9evZXj27BnYYBAGAVVVNYaEpGSG69evMyxZtAAs5ucfyDB50gSi0y9OUFlVC/Y6CBcUFpOW5nCB1LQMuKGlZRXUNdTFxZU6BoLAqjXrqWcYKmBgAABLANiF7ZrMMQAAAABJRU5ErkJggg==`;

let base64_maximize_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAASUExURZeXlygoKBoaGlJSUoqKigAAALgjhAUAAAAGdFJOU///////ALO/pL8AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAA7SURBVChTvY5BCgAgEALXbf3/lwMziOhYzUFxTgYPvJOBHHgqs5Vo0LQsFStVnyXmpVWGv8NTuXFfkh3t3wc5khylWQAAAABJRU5ErkJggg==`;

let base64_minimize_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABTSURBVDhPYxgFo2A4AkYojQLOnz///9OnT1AediArK8ugpKSEoR+rgRoaGgQN5OPjY7hx4wZxBt69e/f/kydPoDzsAGSgoaEhVv2jYBQMLGBgAADrdxUEiGkOnQAAAABJRU5ErkJggg==`;

let base64_close_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABcSURBVDhPYxgFQwSYmZn97+rq+g/lYgCQnLm5OU55DADSICUlhdVQfHJ4ATaNZBsGA8gGUGwYDMAMItYwJihNH4DsTWQ2VJo0gM0Asg3Fp5EsQ6mesEfBQAIGBgCOnmcpbdNraQAAAABJRU5ErkJggg==`;

let base64_restore_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAbUExURdLS0lJSUk1NTaqqqszMzMHBwba2tlNTUwAAAHMRaqEAAAAJdFJOU///////////AFNPeBIAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABPSURBVChTtY4xDoAwDAONCUn+/2KUOF0qNsCDqztZbZEP+VPiIHnagI60ykXhdO1IeAi76TX0MDaO7MuMLyWE6tBD2i2J/lEIltzyvcy8AQw4Cw0z6AqMAAAAAElFTkSuQmCC`;

let base64_closewindow = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARCAYAAAA7bUf6AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADeSURBVDhPrZPLEYIwEIapI9YAXZFOAOtgsIDokQRvoA3w0AtWspLHOkMgkGH8bsnsfPzZXYK/0fcvqOsHmKMXjN3m9U3zBEIIcF55idI0gzAMYRw/83oh7pPotCvSggiG4b1eV1VS5E6ECeTzzdU6nAslksnMlSJJUiVwJrBBESbSggi6bvATICiilPo9wUUcUyXK8+KYIMvOKkFRXCbR/tQWYBOxB1KgRcJPhAK7BygqS74twj1wjREX0h7/DxS0bb/5JZ2IgFxMc6Vh7LqZwAZFi/rFz7TD4b1ZJwi+r2LJUdGyCHcAAAAASUVORK5CYII=`;

let base64_view_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAABOUExURbm6voSFhn19fn19f4SFh7e4vLi6vn1+f4WFh1hYWJaWlqioqFlZWbi5vba4u4SEhn5+f1paWl1dXbKztrKzt7Gytbq7v7a3u7GytgAAAPHCN2kAAAAadFJOU/////////////////////////////////8AFCIA2gAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAJ9JREFUKFN1j+EagiAMRZmjRpBaQdre/0W7CyUr26/DgfHd63RnIB117A92OJJIADl1p5hSPPfgSgOkj/YokmqoNEJKMkysypUukF1F0fVaIMe6FNo6QQ5X+/6W9U2IlImFij3Ko3C4v3L+zj85BRGa7TChkQe1RkNr1ENSDeJ1JYu09ED4RttGG7k0+lyfvxsVSM2eO4JTLSRMj93wqk8cZBxxdvyDjwAAAABJRU5ErkJggg==`;

let base64_sortby_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAASCAMAAABo+94fAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACZUExURZKTleDi55/J7YmKi1VVVWdoaOXn67XV8AB41ImJi1xdXW5ub+Tm6rjX8s3P0r/BxOPl6rXU71xcXcrLz+bo7G5vb+Lk6Y6Pkc/Q1JSVl8rM0IuMjrfW8bbW8Njn9lel4dzp9rjW8G+w5iaL2rnX8At+1svN0CaM2wt91lCh4N3q96TL7ByH2E+g4Nrn9cTFyNLj9Was4wAAAOJ0OTgAAAAzdFJOU///////////////////////////////////////////////////////////////////AHGevY4AAAAJcEhZcwAADsMAAA7DAcdvqGQAAACmSURBVChTbc/ZEoIwDAVQkIKFKrjiLtWCouKW//840wa0jOTl3jmTSacOdE7NjksJPQpij/mBKX1ugjiMmC8Gug0t9qKYJUKMsI5/HE5iYNOZmKf2kUW0BGQIhLB5FWOwNUC6cdtPEuvZdvPuj/eZrG8fjva2UtJwXmRfPgFIdZbIeXlp374qdeN5gWpv6/2Kl3fdGsYv4TwqbrThJwW83pQ1twfgAyGtPuH1+P8tAAAAAElFTkSuQmCC`;

let base64_refresh_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAMAAADzapwJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADzUExURc/R1aanqX19fmhpaXBwcZOUlsrM0LW2uZCRk93e43Z2d1paWo2OkKiprL7Aw8LDx7CxtIuMjn1+f6SlqLi5vFxdXZiZm+Tm6ufp7ZeYmlVVVa2usausr1hYWLq8v8jJzVxcXYGBg319f9nb383O0ldXV3V1dnd3eIyMjoaHicvN0ODh5szN0aKjpoKChKmqramqrGtrbLa3ur6/wmFhYn5/gLO0t39/gI6OkJqbnePl6ru9wJWWmKKjpdLU2MDCxdDR1a6usc3N0aCgo5aWmOXn7Ojq7rGxtMTFyIeHiMzN0GdnZ8rLzmhoaWlpac3P0gAAAGom1nUAAABRdFJOU///////////////////////////////////////////////////////////////////////////////////////////////////////////AGjsqMEAAAAJcEhZcwAADsMAAA7DAcdvqGQAAADqSURBVChTbc/ZVsIwFIXhULACgYoyV4oVlKGgiGIdkEFFxQn3+z8Nyekpqyz5L5KcLxdNBXYWsogZ8YSxZ6rjfjLkVFpmstZB7lAemcgbzIViqUzXqFTt45BrTj1A3Yl72iBuSouJOjtvEbc7DEDd1nU1e26PUeV5/b5+jcDFZSBbCbQHfIwmICPPCKpcKR5e87TpZqT41udp0+BOcfLfJ+8fFJvOI49cWY4Vo/HEMzdJ019O7TEDNXPmxHh2I/7ivqpVM3LO4k3vwHtVfuidGMuE/PStL78z+v4hCBiYZ37jq+Hij8eQtwLWdKJ/Z2zyfIQAAAAASUVORK5CYII=`;

let base64_undo_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABMAAAAWCAMAAAAVQ1dNAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADJUExURZTE61yn4t3p9mas4zWU3B+I2DKS3Giu5dHj9Hq35z2Y3oG66At+1i6P24S86JjG7H235wh81YS753q251Wk4gx+1qTM7n245wR61T2X3tzo9jaU3CKJ2c3h8wt91uHr93m25j2X3cnf8xuG2ODq9heE2CuO21+p40yf32as4gF51GCp41un4met467R7zmW3dnn9qvP7jmV3SqN2lCg4Nvn9SaL2sXd8kGa3uPs9ajP72Or5Ii+6avQ7s7i9K7Q7lOj4DmV3AAAAO4U48oAAABDdFJOU////////////////////////////////////////////////////////////////////////////////////////wBBYgTvAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAw0lEQVQoU2XP1xKCMBAFUMAaiqiIgmJBxAaKvdf9/48yWQK2+5Kbk8xsIsB/BBBELFImm8sXirERma2KqpX0slapohnMamadnUDD0vGeDc2W00YCIJ0utZ7b99wBJwCfTgAy7Iz4nmUsUptMHdu15YBbGFIrzgzSI8acWxRQ+87CWv7Zas3e8pWN3/yxbX7HPvdpe+9wZOuHndRzXN6mWBfeUhPNK2+JSZHXjxtNbLdcS8KCQbubD9zwoD0J9iTpjDQAL7CsW0CRzLdWAAAAAElFTkSuQmCC`;

let base64_new_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABUAAAAVCAYAAACpF6WWAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAKJSURBVDhPtZRfaFJRHMd/iwhhTFDvrnuIwBXupbecYg6CRRT56nQMBmPtwbf2FPNJe9tDL6MxXAt8qRs+jcr2EpSRD0Kx9W/qUmOsqy5TV/4JXMGve367yjavMkZ94N77+/3uOd97zrnfc+B/0CU/FXn85Bmuf/oIxWIBarUaqNVq4LheuGAahMvDl9r2VXwhCEFcWXlKIlarFXieB61WC6IoQiqVgnQ6DfX6LjgcTrDbr3UcGIiZPPp8t3FqagojkQjKZUUEQcDR0VGcm7vbsR3MzHjQ4/FgPp/v3FAmFovRABYW/Mrt/f571OCogg2i0SiOjIxgOHxoZltft9HlcrWd8ppYxYE7n9t+bH5+Hm9OTzffn2C3V+EXoNFoYGhoSHHRC7U/sFHYlbNWnE4nZDMZePP2HQmTaDweA5vNxsJjIbmji7kjHlunnESZD9lI98Om/HzjB13vt+tUa+Ts2ir+OrAcBoMBCoXvFJ9kt1KpCN3d3VRo4BAykC79lrM9rgREOQLwDevkaI++vj7Jv18oJlGO46BcLlOhQfrWQHN92chIcPZ8s+ablQOZbDYLOmm3MWj6PK+HXC5HheOSTCZBr9dTTKJmi5X5jQrHYXNzE6vVKlgsFyknUfv1q10qlQpCoZCiF8/pTrWs4X4CgQCYTGboN5w+aEnmsfHxcZSm0dbkSiwvL+Pk5CR+y5eU+y0uLqHb7cZEInEkYSbIDpWWLXqYBw8f4djYGAaDwbbnAFtDr9dLI3wZft3SRnFbxhMpvL/klxyRBaPRSOdpT08PnafsL1cqFTANmmFi4gboeW2LhqJog9W1D7i2ugo7OyXJxz9Bp+OgV/qARXLL2f4zHfv+YwD+Aj1rL1q15kglAAAAAElFTkSuQmCC`;

let base64_displaysettings_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAXCAMAAAA4Nk+sAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACHUExURXZ3eFdYWFVVVVhYWHZ2dnh4eKLB25C63GtrbCuM1gN51Feg2X+y2kOW1wB41Fuh2DKP1mSm2Ad71CGH1huE1UaW1i+O1mpqa5OTk22o2VtbXISEhi+N1h6F1VCc121tb46PkhGA1HV2eJWXmjaQ12in2W1ub4aHiX6x2Wuo2VlZWWlqawAAAJKETOIAAAAtdFJOU///////////////////////////////////////////////////////////AKXvC/0AAAAJcEhZcwAADsIAAA7CARUoSoAAAACcSURBVChTxZDZDsIgFEQrdWvVa92te92X+f/vcy5QA4k+exIuw8nAAwm+8lsnDRORqkPS9I0PLUqk/hCQUhufA8z/dZurA3RjneW9/kCGTJEuRBkxRXps9YQp1FORGeYimerF0lttAqXd+Ikr+51rYCOyLXllp23H/sBRaVMKplofTxxnqy9Mtb7edFZ3PHINTj/19ZeNjrodAbwBCL1HEFt6Ru0AAAAASUVORK5CYII=`;

let base64_personalise_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABYAAAAWCAYAAADEtGw7AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAG5SURBVEhLYxj0oLau4X9hUfF/KJeBCUpTBCIjI/9zc3EyqKupMqSmpoENp8jgufOX/I+IiPgfEBDAUFFRzsjGxsbAy8cPlSUT9E+c8j8qKur/kSNH4N4HWQJlkgf6Jkz+HxMTi2JIXl7e/6aWNvINBmlOSUlBMWDGjBn/YWFLFmhobMYwdM+ePf9BkQflwgHRkQcy9P27Nwxz5sxhhAqBwYIFCxk8vPyhPBLBpCkzMFwKAtnZ2f/b2rvIC4Ily9cAvRqFobmjo/N/Tk4eeYaCACgJ7d+/H8WAlStXAlNFDPmGJiQk/F+2bBmKARs3bgRnCiiXdOBSMvN/Yecc6hkat/jWf5aqq//Vum+Cae/5D8AGUexS4aZrKJolWm/8z5m9n2RDUdJx7KKb/61kOaA8CPDT4GHYd+cLw4oVK1DSLyGAYvCFN/8ZDKQ4oTwI+PzzH4OMgiqURzyAG1yy9vb/2+/+MjS7S6K4bP21zwz2cqxQHokgYuHt/wwVV/7nbXwKDscJh1/991vwABx5KctukRVhYNclLrn1/+izvwxPP/9j+PmXgUGal4nBVIKZYU2iGknhSgfAwAAAXYfHYMPXKHgAAAAASUVORK5CYII=`;

let base64_showmoreoptions_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAMAAAC6V+0/AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADwUExURbS6v4qNkXp8fnt9f3l8fqqvtIC76TqW3TqW3juX3oK86YqNkF5fX5OXmp2ipp+kqJ6jp9HY4KzR8XS053Oz5XO05nS05iWL2gB41LO5vl5fYNHY34K86CSK2omMj5OWmjqX3p+jqIK76HS1556ip4zA6XOz5oG66IzA6qnP75vI7Hp8f6CkqFVVVV9fYH+Bg8zS2Xt8fpOTk9DQ0MjIyFdXV8zT2sDGzaessaioqJSUlIGEhp+jp4mMkJubm7G2vGBgYOjo6Nnh6mBhYq2zuIKEhmFiYp2hppOXm2BhYXt+gLC2u3p9f4mNkK6zuQAAAMO/nvcAAABQdFJOU/////////////////////////////////////////////////////////////////////////////////////////////////////////8AE3OmeQAAAAlwSFlzAAAOwwAADsMBx2+oZAAAAOdJREFUKFNt0dtSwjAQBuCaVoNVQEA0akWKBVQsSouHqoAcPSD87/827qaRwRn+i+zmm92bxMKGMFpbwna2gR2ZkXJXuox7+9lc/qAAFEuH5aNjJQlPTs/SJR1PnTNWLsyd4yqvVCUUvgGKpzyUM/+xpmrAJa+LwBDqyqWzoXE12bzi8/qGsHWrZT00GVLad/cGOBY6URzH3ejh0cjTM08mun951QXwBU+m2G3rArytYRzqAgQtwl5f9yvMVggH70Pu/3A0nhBiOusnSRKFwYef8z+/vtNHnvdEx7Z/HCGEs1gSbPgO4BdgRWBI+6wNvgAAAABJRU5ErkJggg==`;

let base64_cmd = `https://cdn-icons-png.flaticon.com/128/12676/12676207.png`;

let base64_icon_explorer = `https://img.icons8.com/?size=48&id=GPw1qokXpOJP&format=png`;

let base64_icon_fileexplorer = `https://img.icons8.com/?size=48&id=3bRpRccpLitD&format=png`;

let base64_icon_explorer_tiny = `https://img.icons8.com/?size=48&id=GPw1qokXpOJP&format=png`;


let base64_icon_edge = `https://img.icons8.com/?size=48&id=TJX3x8NCUkFN&format=png`;

let base64_icon_edge_tiny = `https://searchfox.org/mozilla-central/source/browser/branding/nightly/pbmode.ico`;



let icon_settings_taskbar = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAYCAMAAACsjQ8GAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAbUExURTk5OhobG62ur0lJSVhZWSkqKmdoaKChogAAAOteX2MAAAAJdFJOU///////////AFNPeBIAAAAJcEhZcwAADsMAAA7DAcdvqGQAAABfSURBVDhP7ZJBDsAgCARdrcr/X1xATu1afEDnQEJ2EkKgSIILBZSViVSgXYQGVBfQzWR0mDAwo38xMVSAajs0+wUlhC9ciOMQTkdERzgT0nOnD5O/nJZY+sHKrOwRuQFZthKzoE5APAAAAABJRU5ErkJggg==`;

let icon_settings_fonts = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURRobG2doaJKTlDk5OlhZWa2ur3d4eCkqKqChooWGh0lJSQAAAI++r88AAAAMdFJOU///////////////ABLfzs4AAAAJcEhZcwAADsMAAA7DAcdvqGQAAAEJSURBVDhPhZPbEoQwCENT673//7+bBqrgurPnwaGYlkAV7Q+X4Jdy5AuKRw+GAPhxhKcnVEwWPnBBRUO18IELMLf5vYZlC5a2YFUs9Y0JsPGx+RFr8qt4x8Hngb0vKIx+JaBFxbK5YI5+9Qqn4lOLguS3h6sq9BrdJrcvl18TsKhDr/Iz/BJGLDoZ/Wj5Wdm2w6WVFvRiftwV4cs0Y9/rfREwZe0bXt0m00E01P24f81WQTviNXMII3CbcTu5/YwvLAt2nN7xNG4sC6oPTJj3LED1/cSrJUEY4DW/JHjr+CU12DSKKLiGYFjBmEuXQnRjt4Atbun3O9lqCYLe+riADkcFnpHLftHaB1ZIJHH003BnAAAAAElFTkSuQmCC`;

let icon_home_tiny = `data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAVCAMAAABxCz6aAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAkUExURa+vryoqKhsbG6Kiory8vFpaWoeHh5SUlGlpaTo6OsjIyAAAALeCzWUAAAAMdFJOU///////////////ABLfzs4AAAAJcEhZcwAADsIAAA7CARUoSoAAAAB0SURBVChTlZBZDsAgCERxQazc/74FxKVL0nSiMPP8AYFfNCGEsPzoMaU4gzcFViz12uOglzAfl1V1K3djHoDzzpRmgVg8ugoqJE8u+oIVsZrZIB0k5w6Rl/sFbc4FbU4IhYhQIYop8te6KaoaczNjuz/EfAJqWQ5ZfHUghQAAAABJRU5ErkJggg==`;






//create tooltip to 



//
// ##### #    # ##### #####    ##   #####
//   #   #    #   #   #    #  #  #  #    #
//   #   #    #   #   #####  #    # #    #
//   #   #    #   #   #    # ###### #####
//   #   #    #   #   #    # #    # #   #
//   #    ####    #   #####  #    # #    #

//===============toolbar!!!==================
function tutbar(options) {
  const {
    containerSelector,
    glowLeftColor,
    glowRightColor,
    placeholderPhrases,
    size = { width: 500, height: 300 }, // Default size
    location = 'middle',
    removeOnClick = false,
    triggers = [],
    position = 'relative', // Default position
    clickOutsideRemoval = false, // New parameter to remove after 5 seconds if clicked outside
    font="share tech",
    x = 0, // Default x offset
    y = 0  // Default y offset
  } = options;

  const container = document.querySelector(containerSelector);

  if (!container) {
    console.error(`Container with selector ${containerSelector} not found.`);
    return;
  }

  // If already injected, do not inject again until removed
  if (container.querySelector(`.toolbar-input-wrapper`)) {
    return;
  }

  const toolbarContainer = document.createElement('div');
  toolbarContainer.className = 'toolbar-container';
  toolbarContainer.style.position = position; // Set the position
  setLocation(toolbarContainer, location, x, y);

  const toolbarInputWrapper = document.createElement('div');
  toolbarInputWrapper.className = 'toolbar-input-wrapper';
  toolbarInputWrapper.style.width = `${size.width}px`;
  toolbarInputWrapper.style.height = `${size.height}px`;

  const toolbarInput = document.createElement('div');
  toolbarInput.className = 'toolbar-input';

  const toolbarGlowLeft = document.createElement('div');
  toolbarGlowLeft.className = 'toolbar-glow left';
  toolbarGlowLeft.style.boxShadow = `0 0 40px 30px ${glowLeftColor}`;
  toolbarGlowLeft.style.backgroundColor = glowLeftColor;

  const toolbarGlowRight = document.createElement('div');
  toolbarGlowRight.className = 'toolbar-glow right';
  toolbarGlowRight.style.boxShadow = `0 0 40px 30px ${glowRightColor}`;
  toolbarGlowRight.style.backgroundColor = glowRightColor;

  const input = document.createElement('input');
  input.type = 'text';
  input.name = 'text';
  input.style.width = `${size.width - 134}px`; // Adjust width to fit within the wrapper
  input.style.height = `${size.height - 4}px`; // Adjust height to fit within the wrapper
  input.style.fontFamily = font;
  let currentIndex = 0;
  let currentPhraseIndex = 0;
  let isPlaceholderActive = true;
  let typewriterInterval;

  function getRandomPhrase() {
    currentPhraseIndex = Math.floor(Math.random() * placeholderPhrases.length);
    return placeholderPhrases[currentPhraseIndex];
  }

  function typeWriter(phrase) {
    if (currentIndex < phrase.length) {
      input.value += phrase.charAt(currentIndex);
      currentIndex++;
      setTimeout(() => typeWriter(phrase), 10); // Adjust the speed of the typewriter effect here
    } else {
      isPlaceholderActive = true;
      startRandomSwap();
    }
  }

  function startRandomSwap() {
    clearInterval(typewriterInterval);
    typewriterInterval = setInterval(() => {
      if (isPlaceholderActive && input.value !== '') {
        input.value = '';
        currentIndex = 0;
        const newPhrase = getRandomPhrase();
        typeWriter(newPhrase);
      }
    }, Math.random() * 5000 + 2000); // Random interval between 2 to 7 seconds
  }

  function removePlaceholder() {
    clearInterval(typewriterInterval);
    input.value = '';
    currentIndex = 0;
    isPlaceholderActive = false;
  }

  function checkEmptyInput() {
    if (input.value === '' && !isPlaceholderActive) {
      const newPhrase = getRandomPhrase();
      typeWriter(newPhrase);
    }
  }

  input.addEventListener('pointerdown', removePlaceholder);
  input.addEventListener('focus', removePlaceholder);
  input.addEventListener('blur', checkEmptyInput);

  typeWriter(getRandomPhrase());

  const toolbarReflection = document.createElement('div');
  toolbarReflection.className = 'toolbar-reflection';

  const toolbarIcon = document.createElement('div');
  toolbarIcon.className = 'toolbar-icon';

  const loadingIcon = document.createElement('svg');
  loadingIcon.className = 'loading';
  loadingIcon.innerHTML = `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Thinking%20Face.png" alt="Thinking Face" width="25" height="25" />`;

  const magnifierIcon = document.createElement('svg');
  magnifierIcon.className = 'magnifier';
  magnifierIcon.innerHTML = `<img src="https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Face%20with%20Monocle.png" alt="Face with Monocle" width="25" height="25" />`;

  const toolbarFilter = document.createElement('button');
  toolbarFilter.className = 'toolbar-filter';

  const filterSpan = document.createElement('span');

  const filterIcon = document.createElement('svg');
  filterIcon.innerHTML = `<img src="https://github.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/blob/master/Emojis/Activities/Crystal%20Ball.png?raw=true" alt="Face with Monocle" width="25" height="25" />`;

  toolbarIcon.appendChild(loadingIcon);
  toolbarIcon.appendChild(magnifierIcon);
  filterSpan.appendChild(filterIcon);
  toolbarFilter.appendChild(filterSpan);
  toolbarInput.appendChild(toolbarGlowLeft);
  toolbarInput.appendChild(toolbarGlowRight);
  toolbarInput.appendChild(input);
  toolbarInput.appendChild(toolbarReflection);
  toolbarInput.appendChild(toolbarIcon);
  toolbarInput.appendChild(toolbarFilter);

  function handleInputChange() {
    const inputValue = input.value;
    triggers.forEach(({ trigger, action }) => {
      if (inputValue.includes(trigger)) {
        action();
        input.value = ''; // Clear the input after triggering the action
        glowToolbar(toolbarInputWrapper); // Glow the toolbar
      }
    });
  }

  // Add an event listener to the input field
  input.addEventListener('input', handleInputChange);

  // Add an event listener for the Enter key
  input.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      const inputValue = input.value.trim();
      if (inputValue) {
        const url = `https://www.itismagicbro.wordpress.com/${inputValue}`;
        window.open(url, '_blank');
        input.value = ''; // Clear the input field
        toolbarContainer.remove(); // Close the input field
      }
    }
  });

  toolbarInputWrapper.appendChild(toolbarInput);

  const toolbarGlowOutline = document.createElement('div');
  toolbarGlowOutline.className = 'toolbar-glow-outline';

  const toolbarGlowLayerBg = document.createElement('div');
  toolbarGlowLayerBg.className = 'toolbar-glow-layer-bg';

  const toolbarGlowLayer1 = document.createElement('div');
  toolbarGlowLayer1.className = 'toolbar-glow-layer-1';

  const toolbarGlowLayer2 = document.createElement('div');
  toolbarGlowLayer2.className = 'toolbar-glow-layer-2';

  const toolbarGlowLayer3 = document.createElement('div');
  toolbarGlowLayer3.className = 'toolbar-glow-layer-3';

  toolbarInputWrapper.appendChild(toolbarGlowOutline);
  toolbarInputWrapper.appendChild(toolbarGlowLayerBg);
  toolbarInputWrapper.appendChild(toolbarGlowLayer1);
  toolbarInputWrapper.appendChild(toolbarGlowLayer2);
  toolbarInputWrapper.appendChild(toolbarGlowLayer3);
  toolbarInputWrapper.appendChild(toolbarGlowLeft.cloneNode(true));
  toolbarInputWrapper.appendChild(toolbarGlowRight.cloneNode(true));

  toolbarContainer.appendChild(toolbarInputWrapper);
  container.appendChild(toolbarContainer);

  // Add styles
  const style = document.createElement('style');
  style.innerHTML = `
    .toolbar-container {
      position: ${position};
      --ease-elastic: cubic-bezier(0.7, -0.5, 0.3, 1.5);
      --glow-l-color: ${glowLeftColor};
      --glow-r-color: ${glowRightColor};
      --input-radius: 14px;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0;
      animation: fadeIn 1.4s ease forwards 0.2s;
    }

    .toolbar-input-wrapper {
      position: relative;
      z-index: 1;
      width: ${size.width}px;
      height: ${size.height}px;
      transition: width 0.6s ease-in-out, height 0.6s ease-in-out;
    }

    .toolbar-input-wrapper:hover {
      width: ${size.width * 1.1}px;
      height: ${size.height * 1.1}px;
    }

    .toolbar-input-wrapper:focus-within {
      width: ${size.width * 1.2}px;
      height: ${size.height * 1.2}px;
    }

    .toolbar-input {
      background-color: rgba(255, 255, 255, 0.2);
      backdrop-filter: blur(10px);
      border-radius: var(--input-radius);
      position: relative;
      z-index: 10;
      box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    }

    .toolbar-reflection {
      position: absolute;
      inset: 0;
      z-index: 9;
      border-radius: var(--input-radius);
      pointer-events: none;
      overflow: hidden;
    }

    .toolbar-reflection:before {
      content: "";
      position: absolute;
      width: 500px;
      background-color: rgba(255, 255, 255, 0.2);
      background: linear-gradient(
        to right,
        rgba(244, 221, 255, 0.1) 10%,
        rgba(244, 221, 255, 0.5) 60%,
        rgba(244, 221, 255, 0.3) 60%,
        rgba(244, 221, 255, 0.1) 90%
      );
      top: 0;
      bottom: 0;
      opacity: 0.3;
      transform: translateX(-540px) skew(-40deg);
    }

    .toolbar-reflection::after {
      content: "";
      position: absolute;
      left: 68px;
      right: 50%;
      top: 10px;
      bottom: 10px;
      z-index: -1;
      background: linear-gradient(to right, transparent, rgba(2, 2, 2, 0.6));
    }

    .toolbar-input input {
      max-width: 100%;
      width: ${size.width - 134}px;
      height: ${size.height - 4}px;
      padding: 0 67px;
      font-size: 15px;
      background: none;
      border: none;
      color: white;
      position: relative;
      transition: all 0.5s var(--ease-elastic);
      outline: none;
      border-radius: var(--input-radius);
      z-index: 2;
    }

    .toolbar-icon {
      display: grid;
      place-items: center;
      position: absolute;
      left: 14px;
      top: 8px;
      bottom: 8px;
      width: 42px;
      font-size: 24px;
      z-index: 3;
      pointer-events: none;
    }

    .toolbar-icon svg {
      grid-area: 1 / 1;
      transition: opacity 0.5s linear, transform 0.2s ease;
      overflow: visible;
    }

    .toolbar-filter {
      z-index: 3;
      background: none;
      font-size: 27px;
      position: absolute;
      right: 7px;
      top: 7px;
      bottom: 7px;
      width: 46px;
      cursor: pointer;
      color: var(--icon-color);
      border: none;
      overflow: hidden;
      border-radius: calc(var(--input-radius) * 0.9);
    }

    .toolbar-filter:hover:before {
      transition: all 0.8s cubic-bezier(0.5, 0, 0.3, 1);
      transform: translate(320px, 0) skew(30deg);
    }

    .toolbar-filter span {
      inset: 0;
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: inherit;
      background-image: linear-gradient(45deg, hsla(165, 65%, 69%, 1.0), hsla(255, 65%, 69%, 1.0), hsla(345, 65%, 69%, 1.0), hsla(75, 65%, 69%, 1.0));
      background-clip: padding-box;
      border: solid 2px transparent;
    }

    .toolbar-filter,
    .toolbar-filter svg {
      transition: all 0.2s ease;
    }

    .toolbar-filter:hover {
      filter: brightness(1.3);
    }

    .toolbar-filter:hover svg {
      transform: scale(1.07);
    }

    .toolbar-filter:focus svg {
      animation: crazyWiggle 0.8s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    .toolbar-glow {
      width: 20%;
      height: 25%;
      border-radius: 50%;
      opacity: 0.7;
      filter: blur(40px);
      position: absolute;
      margin: auto;
      z-index: -1;
      animation: glow 2s cubic-bezier(0.6, 0, 0.6, 1) infinite;
    }

    @keyframes glow {
      50% {
        width: 30%;
        filter: blur(50px);
      }
    }

    .toolbar-input .toolbar-glow {
      width: 10%;
      height: 0px;
      filter: blur(10px);
      opacity: 0.3;
      animation: none;
    }

    .toolbar-glow.left {
      box-shadow: 0 0 40px 30px var(--glow-l-color);
      background-color: var(--glow-l-color);
      left: 0;
      top: 25%;
    }

    .toolbar-glow.right {
      box-shadow: 0 0 40px 30px var(--glow-r-color);
      background-color: var(--glow-r-color);
      right: 0;
      bottom: 25%;
    }

    .toolbar-glow-layer-bg,
    .toolbar-glow-outline {
      position: absolute;
      border-radius: var(--input-radius);
      overflow: hidden;
    }

    .toolbar-glow-layer-bg {
      z-index: -1;
      inset: -2px;
      background: linear-gradient(45deg, hsla(165, 65%, 69%, 1), hsla(255, 65%, 69%, 1), hsla(345, 65%, 69%, 1), hsla(75, 65%, 69%, 1));
    }

    .toolbar-glow-outline {
      z-index: 9;
      inset: -1px;
      transition: all 0.3s linear;
      opacity: 0;
    }

    .toolbar-glow-outline::before {
      position: absolute;
      inset: 0;
      content: "";
      width: 110px;
      height: 420px;
      margin: auto;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(197, 134, 203, 0.5),
        transparent
      );
      animation: spin 3s linear infinite;
      animation-play-state: paused;
    }

    .toolbar-input-wrapper:hover .toolbar-glow-outline::before {
      animation-play-state: running;
    }

    .toolbar-input-wrapper:hover .toolbar-glow-outline {
      opacity: 1;
    }

    .toolbar-input-wrapper:focus-within .toolbar-glow-outline {
      transition-duration: 0.2s;
      opacity: 0;
    }

    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }

    .toolbar-glow-layer-1 {
      content: "";
      inset: -2px;
      filter: blur(10px);
      position: absolute;
      border-radius: calc(var(--input-radius) * 1.1);
      background: linear-gradient(152deg, rgb(226 0 255 / 20%), rgb(0 0 0 / 0%) 40%),
        linear-gradient(330deg, rgba(65, 66, 82, 0.9), rgb(0 0 0 / 0%) 40%),
        linear-gradient(40deg, rgba(180, 93, 184, 0.3), rgb(0 0 0 / 0%) 40%),
        linear-gradient(220deg, rgb(81 52 157 / 80%), rgb(0 0 0 / 0%) 40%);
    }

    .toolbar-glow-layer-1::before,
    .toolbar-glow-layer-1::after {
      content: "";
      position: absolute;
      width: 30%;
      height: 75%;
      border-radius: 20%;
      box-shadow: 0 0 50px currentColor;
      transition: all 0.5s cubic-bezier(0.6, 0, 0.6, 1);
    }

    .toolbar-input-wrapper:focus-within .toolbar-glow-layer-1::before,
    .toolbar-input-wrapper:focus-within .toolbar-glow-layer-1::after {
      width: 70%;
      height: 95%;
    }

    .toolbar-glow-layer-1::before {
      left: 0;
      top: 0;
      background: linear-gradient(to right, #c44e93 40%, transparent 100%);
    }

    .toolbar-glow-layer-1::after {
      right: 0;
      bottom: 0;
      background: linear-gradient(to left, #584ec4 40%, transparent 100%);
    }

    .toolbar-glow-layer-2::before,
    .toolbar-glow-layer-2::after,
    .toolbar-glow-layer-3::before,
    .toolbar-glow-layer-3::after {
      content: "";
      position: absolute;
      width: 20%;
      height: 70%;
    }

    .toolbar-glow-layer-2::before,
    .toolbar-glow-layer-3::before {
      width: 70%;
      height: 80%;
      border-radius: calc(var(--input-radius) * 1.2) 100% 0 20%;
    }

    .toolbar-glow-layer-2::after,
    .toolbar-glow-layer-3::after {
      width: 70%;
      height: 100%;
      border-radius: 0 50% calc(var(--input-radius) * 1.2) 100%;
    }

    .toolbar-glow-layer-2 {
      inset: -5px;
      position: absolute;
      filter: blur(3px);
      z-index: 2;
    }

    .toolbar-glow-layer-2::before {
      left: 0;
      top: 0;
      background: radial-gradient(at left top, #ff07b0, transparent 70%);
    }

    .toolbar-glow-layer-2::after {
      right: 0;
      bottom: 0;
      background: radial-gradient(at right bottom, #7b0ac7, transparent 70%);
    }

    .toolbar-glow-layer-3 {
      inset: -3px;
      position: absolute;
      z-index: 2;
    }

    .toolbar-glow-layer-3::before,
    .toolbar-glow-layer-3::after {
      filter: blur(1.5px);
    }

    .toolbar-glow-layer-3::before {
      left: 0;
      top: 0;
      background: radial-gradient(at left top, white, transparent 70%);
    }

    .toolbar-glow-layer-3::after {
      right: 0;
      bottom: 0;
      background: radial-gradient(at right bottom, white, transparent 70%);
    }

    .toolbar-input input:not(:placeholder-shown),
    .toolbar-input input:focus {
      width: ${size.width - 74}px;
    }

    .toolbar-input input:not(:placeholder-shown) ~ .toolbar-reflection::after {
      display: none;
    }

    .toolbar-input input:focus:not(:placeholder-shown) ~ .toolbar-icon .magnifier,
    .toolbar-icon .loading {
      opacity: 0;
    }

    .toolbar-input input:focus:not(:placeholder-shown) ~ .toolbar-icon .loading,
    .toolbar-icon .magnifier {
      opacity: 1;
      transition-delay: 0.3s;
      filter: blur(0px);
      transform: scale(1) translate(none);
    }

    .toolbar-input input:focus:not(:placeholder-shown) ~ .toolbar-icon .magnifier {
      transform: scale(1.2) translate(1.7px, 1.7px);
    }

    @keyframes visibility {
      99% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }

    @keyframes glowEffect {
      0% {
        box-shadow: 0 0 20px 10px gold;
      }
      50% {
        box-shadow: 0 0 40px 20px gold;
      }
      100% {
        box-shadow: 0 0 20px 10px gold;
      }
    }
  `;

  document.head.appendChild(style);

  // Remove the tutbar if removeOnClick is true and the click is outside the toolbar or input
  if (removeOnClick) {
    document.addEventListener('pointerdown', (event) => {
      if (!toolbarContainer.contains(event.target) && !input.contains(event.target)) {
        toolbarContainer.remove();
      }
    });
  }

  // Remove the tutbar after 5 seconds if clickOutsideRemoval is true and the click is outside the toolbar or input
  if (clickOutsideRemoval) {
    setTimeout(() => {
      document.addEventListener('pointerdown', (event) => {
        if (!toolbarContainer.contains(event.target) && !input.contains(event.target)) {
          toolbarContainer.remove();
        }
      }, { once: true });
    }, 5000);
  }

  function setLocation(element, location, x, y) {
    const containerRect = container.getBoundingClientRect();
    const toolbarRect = element.getBoundingClientRect();
    const containerWidth = containerRect.width;
    const containerHeight = containerRect.height;
    const toolbarWidth = toolbarRect.width;
    const toolbarHeight = toolbarRect.height;
    const zoomLevel = getZoomLevel(); // Assuming getZoomLevel is a function that returns the zoom factor

    switch (location) {
      case 'middle':
        element.style.left = `${(containerWidth / 2 - toolbarWidth / 2 + x) / zoomLevel}px`;
        element.style.top = `${(containerHeight / 2 - toolbarHeight / 2 + y) / zoomLevel}px`;
        break;
      case 'left':
        element.style.left = `${(20 + x) / zoomLevel}px`;
        element.style.top = `${(containerHeight / 2 - toolbarHeight / 2 + y) / zoomLevel}px`;
        break;
      case 'right':
        element.style.right = `${(20 + x) / zoomLevel}px`;
        element.style.top = `${(containerHeight / 2 - toolbarHeight / 2 + y) / zoomLevel}px`;
        break;
      case 'top':
        element.style.left = `${(containerWidth / 2 - toolbarWidth / 2 + x) / zoomLevel}px`;
        element.style.top = `${(20 + y) / zoomLevel}px`;
        break;
      case 'bottom':
        element.style.left = `${(containerWidth / 2 - toolbarWidth / 2 + x) / zoomLevel}px`;
        element.style.bottom = `${(20 + y) / zoomLevel}px`;
        break;
      case 'top-left':
        element.style.left = `${(20 + x) / zoomLevel}px`;
        element.style.top = `${(20 + y) / zoomLevel}px`;
        break;
      case 'top-right':
        element.style.right = `${(20 + x) / zoomLevel}px`;
        element.style.top = `${(20 + y) / zoomLevel}px`;
        break;
      case 'bottom-left':
        element.style.left = `${(20 + x) / zoomLevel}px`;
        element.style.bottom = `${(20 + y) / zoomLevel}px`;
        break;
      case 'bottom-right':
        element.style.right = `${(20 + x) / zoomLevel}px`;
        element.style.bottom = `${(20 + y) / zoomLevel}px`;
        break;
      default:
        element.style.left = `${(containerWidth / 2 - toolbarWidth / 2 + x) / zoomLevel}px`;
        element.style.top = `${(containerHeight / 2 - toolbarHeight / 2 + y) / zoomLevel}px`;
        break;
    }
  }

  function glowToolbar(element) {
    element.style.animation = 'glowEffect 1s infinite';
    setTimeout(() => {
      element.style.animation = '';
    }, 5000);
  }
}
//
// #      # #    # ######  ####  #    #   ##   #####
// #      # #    # #      #    # #    #  #  #    #
// #      # #    # #####  #      ###### #    #   #
// #      # #    # #      #      #    # ######   #
// #      #  #  #  #      #    # #    # #    #   #
// ###### #   ##   ######  ####  #    # #    #   #


function liveChatNow() {
  // Create a new script element
  var script = document.createElement('script');
  script.type = 'text/javascript';
  script.async = true;
  script.src = 'https://embed.tawk.to/672648744304e3196adc5992/1ibmom2g2';
  script.charset = 'UTF-8';
  script.setAttribute('crossorigin', '*');

  // Create a container div to hold the script and set its z-index
  var container = document.createElement('div');
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.zIndex = '99999';

  // Append the script to the container
  container.appendChild(script);

  // Insert the container at the top of the body
  document.body.insertBefore(container, document.body.firstChild);
}





//=======================================

//todo: adjust confetti to be from qr itself, adjust colors, make the overall container glassmorphed, and customize params of func
async function generateQRCode(content, imageUrl = null) {
  // Ensure the qr-code library is available
const url = imageUrl ||  `https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Alien.png`
  // Create container and set top position in the body
  const qrContainer = document.createElement("div");
  qrContainer.id = "qrContainer";
  qrContainer.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
    text-align: center;
    backdrop-filter: blur(10px);
    background: rgba(255, 255, 255, 0.2);
    border-radius: 15px;
    padding: 20px;
  `;

  // Create QR code element
  const qrCode = document.createElement("qr-code");
  qrCode.id = "qr1";
  qrCode.setAttribute("contents", content);

  // Determine colors based on the provided image
  let moduleColor, backgroundGradient;
  
    const [color1, color2] = await steal(url); // Assuming steal function returns an array of 2 colors
    moduleColor = color1;
    backgroundGradient = `linear-gradient(to right, ${color1}, ${color2})`;
  

  qrCode.setAttribute("module-color", moduleColor);
  qrCode.setAttribute("position-ring-color", moduleColor);
  qrCode.setAttribute("position-center-color", moduleColor);
  qrCode.style.cssText = `
    display: block;
    width: 300px;
    height: 300px;
    background: ${backgroundGradient};
    border-radius: 10px;
    margin: 0 auto;
  `;

  // Create icon for QR code
  const icon = document.createElement("img");
  icon.src = url || "https://raw.githubusercontent.com/Tarikul-Islam-Anik/Animated-Fluent-Emojis/master/Emojis/Smilies/Alien.png";
  icon.slot = "icon";
  icon.style.cssText = `
    position: relative;
    right: 50%;
    width: 90px;
  `;

  // Append icon to QR code
  qrCode.appendChild(icon);

  // Create button container
  const buttonContainer = document.createElement("div");
  buttonContainer.style.cssText = `
    margin-top: 20px;
  `;

  // Create download button
  const downloadBtn = document.createElement("button");
  downloadBtn.id = "downloadBtn";
  downloadBtn.textContent = "Download QR Code";
  downloadBtn.style.cssText = `
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    background: ${backgroundGradient};
  `;

  // Create copy button
  const copyBtn = document.createElement("button");
  copyBtn.id = "copyBtn";
  copyBtn.textContent = "Copy QR Code to Clipboard";
  copyBtn.style.cssText = `
    padding: 10px 20px;
    margin: 0 10px;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 16px;
    cursor: pointer;
    background: ${backgroundGradient};
  `;

  // Append buttons to button container
  buttonContainer.appendChild(downloadBtn);
  buttonContainer.appendChild(copyBtn);

  // Append QR code and button container to main container
  qrContainer.appendChild(qrCode);
  qrContainer.appendChild(buttonContainer);

  // Append main container to body
  document.body.prepend(qrContainer);

  // Dim all other elements
  const dimOverlay = document.createElement("div");
  dimOverlay.style.cssText = `
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 999;
    pointer-events: auto;
  `;
  document.body.prepend(dimOverlay);

  // Add event listener to dimOverlay to remove elements when clicked outside
  dimOverlay.addEventListener('pointerdown', () => {
    document.body.removeChild(dimOverlay);
    document.body.removeChild(qrContainer);
  });

  // Prevent click event from propagating from QR code and buttons
  qrContainer.addEventListener('pointerdown', (event) => {
    event.stopPropagation();
  });

  // Add event listeners for the buttons
  downloadBtn.addEventListener('pointerdown', () => {
    domtoimage.toPng(document.querySelector("#qr1").shadowRoot.querySelector("#qr-container"))
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.download = 'qrcode.png';
        link.href = dataUrl;
        link.click();
        confetti(); // Trigger confetti effect
      });
  });
  
  copyBtn.addEventListener('pointerdown', () => {
    domtoimage.toPng(document.querySelector("#qr1").shadowRoot.querySelector("#qr-container"))
      .then(function (dataUrl) {
        // Convert dataUrl to Blob
        fetch(dataUrl)
          .then(response => response.blob())
          .then(blob => {
            // Write the Blob to the clipboard
            navigator.clipboard.write([new ClipboardItem({ 'image/png': blob })]).then(() => {
              confetti(); // Trigger confetti effect
            }).catch(err => {
              console.error('Failed to copy image to clipboard:', err);
            });
          })
          .catch(err => {
            console.error('Error converting dataUrl to Blob:', err);
          });
      })
      .catch(function (error) {
        console.error('Error generating image:', error);
      });
  });

  // QR code rendered event
  qrCode.addEventListener('codeRendered', () => {
    qrCode.animateQRCode('MaterializeIn');
  });
}



//
// ##### #  ####  #    # ###### ##### # #    #  ####
//   #   # #    # #   #  #        #   # ##   # #    #
//   #   # #      ####   #####    #   # # #  # #
//   #   # #      #  #   #        #   # #  # # #  ###
//   #   # #    # #   #  #        #   # #   ## #    #
//   #   #  ####  #    # ######   #   # #    #  ####

//ticketing

let checkboxStates = {}; // Global object to store checkbox states
let currentIndex = 0; // Global variable to track the current index of the array of arrays
let ticket = {}; // Global object to store user interactions
let currentImage = null; // Global variable to track the current image

function reserve(options = {}) {
  // Reset ticket object when starting a new form
  ticket = {};
  currentIndex = 0;
  currentImage = null;

  // Extract header, subheader, tip, action, and passto options
  const { header, subheader, tip, action, passto, formOptions } = options;

  // Initialize the modal with the first set of inputs
  showModal(formOptions, currentIndex, header, subheader, tip, action, passto);
}

function showModal(options, index, header, subheader, tip, action, passto) {
  const parsedOptions = parseOptions(options[index]);

  // Check if there's an image to display
  const imageOption = parsedOptions.find(opt => opt.image);
  if (imageOption) {
    currentImage = imageOption.image;
  }

  Swal.fire({
    title: header || 'Create Your Ticket',
    text: subheader || '',
    backdrop: false,
    customClass: {
      container: 'dark-glassmorphic-container',
      title: 'dark-glassmorphic-title',
      content: 'dark-glassmorphic-content',
      input: 'dark-glassmorphic-input',
      confirmButton: 'dark-glassmorphic-button',
      cancelButton: 'dark-glassmorphic-button'
    },
    html: `
      <div class="gradient-background" style="border-radius: 10px;">
        ${generateInputs(parsedOptions)}
        <div id="image-preview" style="position: absolute; top: ${imageOption?.image_y || '50%'}; right: ${imageOption?.image_x || '20px'}; transform: translateY(-50%);">
          ${currentImage ? `<img id="swal2_thumbnail" src="${currentImage}" style="max-width: ${imageOption?.image_size || '950px'}; max-height: ${imageOption?.image_size || '950px'}; transform: rotate(${Math.random() * 10 - 5}deg); animation: hoverEffect 3s infinite;">` : ''}
        </div>
      </div>
    `,
    showCancelButton: true,
    confirmButtonText: index < options.length - 1 ? 'Next' : 'Done!',
    preConfirm: () => {
      const inputs = document.querySelectorAll('.swal2-input');
      const checkboxes = document.querySelectorAll('input[type="checkbox"]');
      const dropdowns = document.querySelectorAll('select');
      const numberInputs = document.querySelectorAll('input[type="number"]');

      // Create arrays to store all input values
      const values = Array.from(inputs).map(input => input.value);
      const selectedOptions = Array.from(checkboxes).map(checkbox => {
        checkboxStates[checkbox.id] = checkbox.checked;
        return checkbox.checked;
      });
      const dropdownValues = Array.from(dropdowns).map(dropdown => dropdown.value);
      const numberValues = Array.from(numberInputs).map(numberInput => numberInput.value);

      // Validate required fields
      let isValid = true;
      inputs.forEach((input, i) => {
        const option = parsedOptions.find((opt, idx) => opt.type === 'input' && idx === i);
        if (option && option.required && !input.value.trim()) {
          input.style.borderColor = 'red';
          input.placeholder = `Required field ${option.only === 'string' ? ' (Enter text)' : ' (Enter number)'} 👈`;
          isValid = false;
        } else {
          input.style.borderColor = '';
          input.placeholder = option ? option.value : '';
        }
      });

      if (!isValid) {
        Swal.showValidationMessage('Please fill in all required fields');
        return false;
      }

      // Separate counters for inputs and checkboxes
      let inputCounter = 0;
      let checkboxCounter = 0;
      let dropdownCounter = 0;
      let numberCounter = 0;

      // Store all form values in the ticket object
      parsedOptions.forEach((option) => {
        if (option.type === 'input') {
          // Store input value and increment counter
          ticket[option.title] = values[inputCounter] || '';
          inputCounter++;
        } else if (option.type === 'radio') {
          // Store checkbox value and increment counter
          ticket[option.title] = selectedOptions[checkboxCounter] || false;
          checkboxCounter++;
        } else if (option.type === 'dropdown') {
          // Store dropdown value and increment counter
          ticket[option.title] = dropdownValues[dropdownCounter] || '';
          dropdownCounter++;
        } else if (option.type === 'number') {
          // Store number value and increment counter
          ticket[option.title] = numberValues[numberCounter] || '';
          numberCounter++;
        }
      });

      // Fetch IP and MAC addresses and store them directly in the ticket object
      getUserIP().then(ip => {
        ticket.ipAddress = ip;
        getUserMAC().then(mac => {
          ticket.macAddress = mac;
        });
      });

      return { values, selectedOptions, dropdownValues, numberValues };
    }
  }).then((result) => {
    if (result.isConfirmed) {
      if (currentIndex < options.length - 1) {
        // If there are more inputs to load, show the next set
        currentIndex++;
        showModal(options, currentIndex, header, subheader, tip, action, passto);
      } else {
        // Convert ticket object to strings and pass to generateQRcode function
        const ticketStrings = Object.entries(ticket).map(([key, value]) => `${key}: ${value}`).join('\n');
        if (ticketStrings.length <= 150) { // Adjust the length as per QR code limitations
          generateQRCode(ticketStrings);
        } else {
          const uniqueCode = zend(generateUniqueCode(), ticketStrings);
          displayUniqueCode(uniqueCode);
        }

        // Pass the ticket object as a string to the specified function
        if (passto && typeof window[passto] === 'function') {
          window[passto](JSON.stringify(ticket));
        }
      }
    } else if (result.dismiss === Swal.DismissReason.close && currentIndex < options.length - 1) {
      // If the modal was closed and there are more inputs to load, show the next set
      currentIndex++;
      showModal(options, currentIndex, header, subheader, tip, action, passto);
    }
  });
}

function parseOptions(options) {
  return options.map(option => {
    let type;
    if (Array.isArray(option.value)) {
      type = 'dropdown';
    } else if (typeof option.value === 'boolean') {
      type = 'radio';
    } else if (typeof option.value === 'number') {
      type = 'number';
    } else {
      type = 'input';
    }
    return {
      title: option.title || 'Untitled',
      type: type,
      value: option.value || '',
      color: option.color || 'blue',
      thumb: option.thumb || '',
      tip: option.tip || '',
      only: option.only || 'mixed',
      required: option.required || false,
      image: option.image || null, // Add image parameter
      image_size: option.image_size || '150px', // Add image_size parameter
      image_x: option.image_x || '20px', // Add image_x parameter
      image_y: option.image_y || '50%' // Add image_y parameter
    };
  });
}

function generateInputs(options) {
  let inputCount = 0;
  let checkboxCount = 0;
  let dropdownCount = 0;
  let numberCount = 0;

  return options.map((option, index) => {
    if (option.type === 'input') {
      const currentInput = inputCount++;
   
      return `
        <div class="swal_gen_div" onmouseover="updateImage('${option.image}')">
          <label for="swal-input-${currentInput}" style="color: white; margin-right: 10px;"
            thumb="${option.thumb}" 
            tip="${option.tip}" 
          >${option.title}${option.required ? ' *' : ''}</label>
          ${option.value.length > 50 ? `
            <textarea 
              id="swal-input-${currentInput}" 
              class="swal2-input glassmorphic" 
              placeholder="${option.value}" 
              data-only="${option.only}" 
              style="border: 2px solid ${option.color}; background: rgba(255, 255, 255, 0.1); color: white; padding: 10px; border-radius: 5px; margin-bottom: 10px; transition: all 0.3s;"
            ></textarea>
          ` : `
            <input 
              id="swal-input-${currentInput}" 
              class="swal2-input glassmorphic" 
              placeholder="${option.value}" 
              data-only="${option.only}" 
              style="border: 2px solid ${option.color}; background: rgba(255, 255, 255, 0.1); color: white; padding: 10px; border-radius: 5px; margin-bottom: 10px; transition: all 0.3s;"
            >
          `}
        </div>
      `;
    } else if (option.type === 'radio') {
      const currentCheckbox = checkboxCount++;
      return `
        <div class="swal_gen_div" onmouseover="updateImage('${option.image}')">
          <label for="option-${currentCheckbox}" style="color: white; margin-right: 10px;"
            thumb="${option.thumb}" 
            tip="${option.tip}" 
          >${option.title}</label>
          <div class="checkbox-wrapper">
            <input 
              type="checkbox" 
              id="option-${currentCheckbox}" 
              name="options" 
              value="${option.value}" 
              style="appearance: none; width: 20px; height: 20px; border-radius: 50%; background: ${option.value ? option.color : 'red'}; border: 2px solid white; cursor: pointer; transition: all 0.3s;"
              onmouseover="this.style.transform='scale(1.2)';"
              onmouseout="this.style.transform='scale(1)';"
            >
            <label for="option-${currentCheckbox}">
              <div class="tick_mark"></div>
            </label>
          </div>
        </div>
      `;
    } else if (option.type === 'dropdown') {
      const currentDropdown = dropdownCount++;
      return `
        <div class="swal_gen_div" onmouseover="updateImage('${option.image}')">
          <label for="swal-dropdown-${currentDropdown}" style="color: white; margin-right: 10px;"
            thumb="${option.thumb}" 
            tip="${option.tip}" 
          >${option.title}${option.required ? ' *' : ''}</label>
          <select 
            id="swal-dropdown-${currentDropdown}" 
            class="swal2-input glassmorphic" 
            style="border: 2px solid ${option.color}; background: rgba(255, 255, 255, 0.1); color: white; padding: 10px; border-radius: 5px; margin-bottom: 10px; transition: all 0.3s;"
          >
            ${option.value.map(val => `<option value="${val}">${val}</option>`).join('')}
          </select>
        </div>
      `;
    } else if (option.type === 'number') {
      const currentNumber = numberCount++;
      return `
        <div class="swal_gen_div" onmouseover="updateImage('${option.image}')">
          <label for="swal-number-${currentNumber}" style="color: white; margin-right: 10px;"
            thumb="${option.thumb}" 
            tip="${option.tip}" 
          >${option.title}${option.required ? ' *' : ''}</label>
          <input 
            type="number" 
            id="swal-number-${currentNumber}" 
            class="swal2-input glassmorphic" 
            placeholder="${option.value}" 
            style="border: 2px solid ${option.color}; background: rgba(255, 255, 255, 0.1); color: white; padding: 10px; border-radius: 5px; margin-bottom: 10px; transition: all 0.3s;"
          >
        </div>
      `;
    }
  }).join('');
}

function updateImage(imageUrl) {
  if (imageUrl && imageUrl !== currentImage) {
    const imagePreview = document.getElementById('image-preview');
    const imgElement = document.createElement('img');
    imgElement.id = 'swal2_thumbnail';
    imgElement.src = imageUrl;

    imgElement.style.transform = `rotate(${Math.random() * 10 - 5}deg)`;
    imgElement.style.zIndex = `-1`
    imgElement.style.animation = 'hoverEffect 3s infinite';

    imgElement.onload = () => {
      currentImage = imageUrl;
      imagePreview.innerHTML = '';
      imagePreview.appendChild(imgElement);
    };

    imgElement.onerror = () => {
      console.error('Image failed to load:', imageUrl);
    };
  }
}

function generateUniqueCode() {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const segments = [];
  for (let i = 0; i < 4; i++) {
    let segment = '';
    for (let j = 0; j < 3; j++) {
      segment += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    segments.push(segment);
  }
  return segments.join('-');
}

function zend(uniqueCode, ticketStrings) {
  // Simulate the zend function logic
  return `${uniqueCode}-${ticketStrings.substring(0, 10)}`;
}

function displayUniqueCode(uniqueCode) {
  const container = document.createElement('div');
  container.className = 'glassmorphic-container';
  container.style.position = 'fixed';
  container.style.top = '50%';
  container.style.left = '50%';
  container.style.transform = 'translate(-50%, -50%)';
  container.style.backgroundColor = 'rgba(0, 0, 0, 0.5)'; // Black glassmorphic background
  container.style.borderRadius = '15px';
  container.style.padding = '30px';
  container.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.2)';
  container.style.backdropFilter = 'blur(15px)';
  container.style.color = 'white';
  container.style.textAlign = 'center';
  container.style.width = '400px';
  container.style.maxWidth = '90%';

  const title = document.createElement('h2');
  title.textContent = 'Unique Code';
  title.style.marginBottom = '20px';
  title.style.fontSize = '2em';

  const code = document.createElement('p');
  code.textContent = uniqueCode;
  code.style.fontSize = '1.8em';
  code.style.marginBottom = '30px';
  code.style.fontWeight = 'bold';
  code.style.background = 'linear-gradient(45deg, #ff00cc, #3333ff)'; // Cool gradient color
  code.style.webkitBackgroundClip = 'text';
  code.style.webkitTextFillColor = 'transparent';

  const copyButton = document.createElement('button');
  copyButton.textContent = 'Copy';
  copyButton.className = 'dark-glassmorphic-button';
  copyButton.style.padding = '15px 30px';
  copyButton.style.borderRadius = '10px';
  copyButton.style.border = 'none';
  copyButton.style.cursor = 'pointer';
  copyButton.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
  copyButton.style.color = 'white';
  copyButton.style.transition = 'background-color 0.3s';
  copyButton.addEventListener('pointerdown', () => {
    navigator.clipboard.writeText(uniqueCode).then(() => {
      showCopiedEffect();
      container.remove();
      liveChatNow();
    });
  });

  const instructionText = document.createElement('p');
  instructionText.textContent = 'Copy it and paste it in the customer support\'s live chat to start your order.';
  instructionText.style.fontSize = '1em';
  instructionText.style.marginBottom = '20px';
  instructionText.style.color = 'rgba(255, 255, 255, 0.8)';

  container.appendChild(title);
  container.appendChild(code);
  container.appendChild(instructionText);
  container.appendChild(copyButton);

  document.body.appendChild(container);
}

function showCopiedEffect() {
  const numberOfCopiedTexts = 10;
  for (let i = 0; i < numberOfCopiedTexts; i++) {
    const copiedText = document.createElement('div');
    copiedText.textContent = 'Copied';
    copiedText.style.position = 'fixed';
    copiedText.style.top = '0';
    copiedText.style.left = `${Math.random() * 100}%`;
    copiedText.style.color = 'yellow';
    copiedText.style.fontSize = `${1 + Math.random() * 2}em`;
    copiedText.style.fontWeight = 'bold';
    copiedText.style.opacity = '1';
    copiedText.style.transform = `rotate(${Math.random() * 360}deg)`;
    copiedText.style.transition = 'opacity 1s, top 4s';

    document.body.appendChild(copiedText);

    setTimeout(() => {
      copiedText.style.top = '100%';
      copiedText.style.opacity = '0';
    }, 100);

    setTimeout(() => {
      document.body.removeChild(copiedText);
    }, 4100);
  }
}

// Function to fetch the user's IP address
function getUserIP() {
  return fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => data.ip)
    .catch(error => {
      console.error('Error fetching IP address:', error);
      return 'Unknown';
    });
}

// Function to fetch the user's MAC address (simplified and may not work in all browsers)
function getUserMAC() {
  return new Promise((resolve, reject) => {
    const RTCPeerConnection = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
    if (!RTCPeerConnection) {
      reject('WebRTC not supported');
      return;
    }

    const pc = new RTCPeerConnection({ iceServers: [] });
    pc.createDataChannel('');
    pc.createOffer().then(offer => pc.setLocalDescription(offer));

    pc.onicecandidate = event => {
      if (event.candidate) {
        const parts = event.candidate.candidate.split(' ');
        const macAddress = parts[7];
        resolve(macAddress);
      }
    };
  });
}

// Example function to process the ticket object
function processTicket(ticketString) {
  const myticket = JSON.parse(ticketString);
  console.warn('Processing ticket:', myticket);
  // Add your processing logic here
}

// CSS for the hover effect
const swal2_thumb_effect = document.createElement('style');
swal2_thumb_effect.innerHTML = `
  @keyframes hoverEffect {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
`;
document.head.appendChild(swal2_thumb_effect);




// 
//  ##### #    #
//    #   #    #
//    #   #    #
//    #   #    #
//    #    #  #
//    #     ##

//----------------------------------tv----------------------------
const tv = ({
  x = 0,
  y = 0,
  frame_x = 0,
  frame_y = 0,
  value,
  overall_size = 0.7, // Default size is now slightly smaller
  size = 1,
  width = 380, // Default width
  height = 280, // Default height
  hover_action,
  click_action,
  location,
  noise = false,
  autoplay = false,
  mute = false, // New parameter for muting
  rotation = 0, // New parameter for rotation
  tip = false, // New parameter for adding 'tip' attribute
  thumb = false, // New parameter for adding 'thumb' attribute
  animation = false, // New parameter for adding animation class
  canClose = false, // New parameter to enable close button
  interval = 10000, // Default interval is 10 seconds
  shuffle = false, // New parameter to shuffle the array
  frame = 'https://static.vecteezy.com/system/resources/thumbnails/049/352/934/small/old-bronze-or-silver-television-on-isolated-background-png.png', // New parameter for custom frame image
  badge = null, // New parameter for badge
  badge_x = 0, // New parameter for badge x position (relative to container)
  badge_y = 0, // New parameter for badge y position (relative to container)
  badge_tip = false, // New parameter for adding 'tip' attribute to badge
  badge_thumb = false, // New parameter for adding 'thumb' attribute to badge
  slide = true, // New parameter for automatic swiping
  draggable = false, // New parameter for making the container draggable
  stay_for = 5, // Default stay duration in seconds
  in_animation = 'fadeIn', // Default in animation
  out_animation = 'fadeOut', // Default out animation
  extra_x = 0, // New parameter for extra x distance
  extra_y = 0, // New parameter for extra y distance
}) => {
  const getContentType = (value) => {
    if (value.match(/\.(jpeg|jpg|gif|png|json)$/i)) return 'image';
    if (value.includes('youtube.com') || value.includes('youtu.be')) return 'youtube';
    if (value.includes('vimeo.com')) return 'vimeo';
    return 'iframe';
  };

  const getYouTubeId = (url) => {
    const match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/);
    return match?.[1] || '';
  };

  const getVimeoId = (url) => {
    const match = url.match(/vimeo\.com\/(?:.*#|.*\/videos\/)?([0-9]+)/);
    return match?.[1] || '';
  };

  const getPositionStyle = (location) => {
    const base = { position: 'fixed' };
    
    switch (location) {
      case 'top':
        return { ...base, top: '20px', left: '50%', transform: 'translateX(-50%)' };
      case 'bottom':
        return { ...base, bottom: '20px', left: '50%', transform: 'translateX(-50%)' };
      case 'left':
        return { ...base, left: '20px', top: '50%', transform: 'translateY(-50%)' };
      case 'right':
        return { ...base, right: '20px', top: '50%', transform: 'translateY(-50%)' };
      case 'top-left':
        return { ...base, top: '20px', left: '20px' };
      case 'top-right':
        return { ...base, top: '20px', right: '20px' };
      case 'bottom-left':
        return { ...base, bottom: '20px', left: '20px' };
      case 'bottom-right':
        return { ...base, bottom: '20px', right: '20px' };
      default:
        return {};
    }
  };

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (e) {
      return false;
    }
  };

  const container = document.createElement('div');
  container.style.position = location ? 'fixed' : 'relative';
  container.style.zIndex = `9999999999`;
  container.style.width = `${400 * overall_size}px`;
  container.style.height = `${300 * overall_size}px`;
  Object.assign(container.style, getPositionStyle(location));
  
  if (rotation) {
    container.style.transform = `rotate(${rotation}deg)`;
  }
  
  if (tip) {
    container.setAttribute('tip', tip);
  }
  
  if (thumb) {
    container.setAttribute('thumb', thumb);
  }
  
  if (animation) {
    container.classList.add(animation);
  }

  // Apply extra x and y distances
  container.style.transform += ` translate(${extra_x}px, ${extra_y}px)`;

  let timer;
  
  const showNextContent = () => {
    if (Array.isArray(value)) {
      if (shuffle) {
        value = shuffleArray([...value]);
      }

      const currentValue = value[currentIndex];
      const contentType = getContentType(currentValue);
      let content;

      switch (contentType) {
        case 'image':
          content = document.createElement('img');
          content.src = currentValue;
          break;

        case 'youtube':
          content = document.createElement('iframe');
          content.src = `https://www.youtube.com/embed/${getYouTubeId(currentValue)}?${autoplay ? 'autoplay=1' : ''}${mute ? '&mute=1' : ''}`;
          break;

        case 'vimeo':
          content = document.createElement('iframe');
          content.src = `https://player.vimeo.com/video/${getVimeoId(currentValue)}?${autoplay ? 'autoplay=1' : ''}${mute ? '&muted=1' : ''}`;
          break;

        default:
          content = document.createElement('iframe');
          content.src = currentValue;
      }

      Object.assign(content.style, {
        position: 'absolute',
        width: `${width * size * overall_size}px`,
        height: `${height * size * overall_size}px`,
        transform: `translate(${x}px, ${y}px)`,
        zIndex: '0',
        border: 'none',
        borderRadius: '20px',
        objectFit: 'cover',
      });

      // Find the content wrapper or create it if not present
      let contentWrapper = container.querySelector('.content-wrapper');
      if (!contentWrapper) {
        contentWrapper = document.createElement('div');
        contentWrapper.classList.add('content-wrapper');
        contentWrapper.style.position = 'relative';
        contentWrapper.style.zIndex = '0';
        container.appendChild(contentWrapper);
      }

      // Clear only the content within the wrapper
      contentWrapper.innerHTML = '';
      contentWrapper.appendChild(content);

      currentIndex = (currentIndex + 1) % value.length;
    }
  };

  const startTimer = () => {
    timer = setInterval(showNextContent, interval);
  };

  const stopTimer = () => {
    clearInterval(timer);
  };

  container.addEventListener('mouseenter', () => {
    stopTimer();
    if (hover_action) hover_action();
  });

  container.addEventListener('mouseleave', () => {
    if (slide) {
      startTimer();
    }
  });

  if (canClose) {
    const closeButton = document.createElement('button');
    closeButton.style.position = 'absolute';
    closeButton.style.top = '-20px';
    closeButton.style.right = '0';
    closeButton.style.width = '20px';
    closeButton.style.height = '20px';
    closeButton.style.borderRadius = '50%';
    closeButton.style.backgroundColor = 'red';
    closeButton.style.color = 'white';
    closeButton.style.border = 'none';
    closeButton.style.cursor = 'pointer';
    closeButton.style.display = 'none'; // Initially hidden
    closeButton.textContent = 'X';

    closeButton.addEventListener('pointerdown', () => {
      container.remove();
    });

    container.addEventListener('mouseenter', () => {
      closeButton.style.display = 'block';
    });

    container.addEventListener('mouseleave', () => {
      closeButton.style.display = 'none';
    });

    container.appendChild(closeButton);
  }

  if (noise) {
    const noiseOverlay = document.createElement('div');
    noiseOverlay.style.position = 'absolute';
    noiseOverlay.style.width = `${width * size * overall_size}px`;
    noiseOverlay.style.height = `${height * size * overall_size}px`;
    noiseOverlay.style.zIndex = '2';
    noiseOverlay.style.backgroundImage = 'url(https://www.transparenttextures.com/patterns/black-thread-light.png)';
    noiseOverlay.style.opacity = '0.5';
    noiseOverlay.style.pointerEvents = 'none'; // Allow clicks to pass through the overlay
    noiseOverlay.style.animation = 'noise 1s steps(10) infinite';
    container.appendChild(noiseOverlay);
  }

  if (click_action) {
    container.addEventListener('pointerdown', click_action);
  }

  // Add badge if provided
  if (badge) {
    const badgeElement = document.createElement('img');
    badgeElement.src = badge;
    badgeElement.style.position = 'absolute';
    badgeElement.style.width = '50px';
    badgeElement.style.height = '50px';
    badgeElement.style.zIndex = '3';
    badgeElement.style.pointerEvents = 'none';

    // Set badge position relative to the container
    badgeElement.style.left = `${badge_x}px`;
    badgeElement.style.top = `${badge_y}px`;

    if (badge_tip) {
      badgeElement.setAttribute('tip', badge_tip);
    }
    
    if (badge_thumb) {
      badgeElement.setAttribute('thumb', badge_thumb);
    }

    container.appendChild(badgeElement);
  }

  // Add manual navigation buttons if slide is false
  if (!slide) {
    const prevButton = document.createElement('button');
    prevButton.id = 'previous_ad';
    prevButton.style.position = 'absolute';
    prevButton.style.top = '50%';
    prevButton.style.left = '10px';
    prevButton.style.transform = 'translateY(-50%)';
    prevButton.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    prevButton.style.border = 'none';
    prevButton.style.borderRadius = '50%';
    prevButton.style.width = '40px';
    prevButton.style.height = '40px';
    prevButton.style.cursor = 'pointer';
    prevButton.style.display = 'none';
    prevButton.style.fontSize = '20px';
    prevButton.style.fontWeight = 'bold';
    prevButton.style.color = 'rgba(0, 0, 0, 0.7)';
    prevButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    prevButton.innerHTML = '&#10094;'; // Left arrow

    const nextButton = document.createElement('button');
    nextButton.id = 'next_ad';
    nextButton.style.position = 'absolute';
    nextButton.style.top = '50%';
    nextButton.style.right = '10px';
    nextButton.style.transform = 'translateY(-50%)';
    nextButton.style.backgroundColor = 'rgba(255, 255, 255, 0.5)';
    nextButton.style.border = 'none';
    nextButton.style.borderRadius = '50%';
    nextButton.style.width = '40px';
    nextButton.style.height = '40px';
    nextButton.style.cursor = 'pointer';
    nextButton.style.display = 'none';
    nextButton.style.fontSize = '20px';
    nextButton.style.fontWeight = 'bold';
    nextButton.style.color = 'rgba(0, 0, 0, 0.7)';
    nextButton.style.boxShadow = '0 0 10px rgba(0, 0, 0, 0.3)';
    nextButton.innerHTML = '&#10095;'; // Right arrow

    prevButton.addEventListener('pointerdown', () => {
      currentIndex = (currentIndex - 1 + value.length) % value.length;
      showNextContent();
      prevButton.classList.add('wobble');
      setTimeout(() => prevButton.classList.remove('wobble'), 500);
    });

    nextButton.addEventListener('pointerdown', () => {
      currentIndex = (currentIndex + 1) % value.length;
      showNextContent();
      nextButton.classList.add('wobble');
      setTimeout(() => nextButton.classList.remove('wobble'), 500);
    });

    container.addEventListener('mouseenter', () => {
      prevButton.style.display = 'block';
      nextButton.style.display = 'block';
    });

    container.addEventListener('mouseleave', () => {
      prevButton.style.display = 'none';
      nextButton.style.display = 'none';
    });

    container.appendChild(prevButton);
    container.appendChild(nextButton);
  }

  // Display the frame
  const frameElement = document.createElement('img');
  frameElement.src = frame;
  frameElement.style.position = 'absolute';
  frameElement.style.width = '100%';
  frameElement.style.height = '100%';
  frameElement.style.zIndex = '1';
  frameElement.style.transform = `translate(${frame_x}px, ${frame_y}px)`;
  frameElement.style.pointerEvents = 'none';
  container.appendChild(frameElement);

  // Apply in animation
  container.classList.add(in_animation);

  // Remove the TV after the stay duration
  setTimeout(() => {
    container.classList.remove(in_animation);
    container.classList.add(out_animation);
    setTimeout(() => {
      container.remove();
    }, 1000); // Assuming out_animation duration is 1 second
  }, stay_for * 1000);

  showNextContent();
  if (slide) {
    startTimer();
  }

  // Add draggable functionality
  if (draggable) {
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener('mousedown', (e) => {
      isDragging = true;
      offsetX = e.clientX - container.getBoundingClientRect().left;
      offsetY = e.clientY - container.getBoundingClientRect().top;
      container.style.cursor = 'grabbing';
    });

    document.addEventListener('mousemove', (e) => {
      if (isDragging) {
        container.style.left = `${e.clientX - offsetX}px`;
        container.style.top = `${e.clientY - offsetY}px`;
      }
    });

    document.addEventListener('mouseup', () => {
      isDragging = false;
      container.style.cursor = 'grab';
    });

    container.style.cursor = 'grab';
  }

  document.body.appendChild(container);
};


// CSS for animated noise, fadeIn animation, and wobble animation
document.head.appendChild(document.createElement('style')).textContent = `
  @keyframes noise {
    0%, 100% { background-position: 0 0; }
    10% { background-position: -5% -10%; }
    20% { background-position: -15% 5%; }
    30% { background-position: 7% -25%; }
    40% { background-position: 20% 25%; }
    50% { background-position: -25% 10%; }
    60% { background-position: 15% 5%; }
    70% { background-position: 0% 15%; }
    80% { background-position: 25% 35%; }
    90% {  background-position: -10% 10%; }
  }

  .fadeIn {
    animation: fadeIn 1s ease-in-out;
  }

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  .fadeOut {
    animation: fadeOut 1s ease-in-out;
  }

  @keyframes fadeOut {
    0% { opacity: 1; }
    100% { opacity: 0; }
  }

  .wobble {
    animation: wobble 0.5s ease-in-out;
  }

  @keyframes wobble {
    0%, 100% { transform: translateY(-50%) rotate(0deg); }
    25% { transform: translateY(-50%) rotate(-10deg); }
    50% { transform: translateY(-50%) rotate(10deg); }
    75% { transform: translateY(-50%) rotate(-5deg); }
  }
`;


// 
//    ##   #    # #####  ####     ######  ####   ####  #    #
//   #  #  #    #   #   #    #        #  #    # #    # ##  ##
//  #    # #    #   #   #    #       #   #    # #    # # ## #
//  ###### #    #   #   #    #      #    #    # #    # #    #
//  #    # #    #   #   #    #     #     #    # #    # #    #
//  #    #  ####    #    ####     ######  ####   ####  #    #

//ZOOMING
function autoZoom() {
  const screenWidth = window.innerWidth;
  const tablet = 1200; // Define the width for laptop
  const phone = 980;   // Define the width for phone
  patternize('w-taskbar', ["https://cdn3d.iconscout.com/3d/premium/thumb/long-spring-shape-3d-illustration-download-in-png-blend-fbx-gltf-file-formats--sphere-decoration-pack-art-abstract-illustrations-4787004.png?f=webp"
    , "https://cdn3d.iconscout.com/3d/premium/thumb/galaxy-abstract-gradient-shape-3d-icon-download-in-png-blend-fbx-gltf-file-formats--glass-pack-wallpaper-icons-9093259.png?f=webp"
  ,"https://cdn3d.iconscout.com/3d/premium/thumb/u-abstract-shape-3d-icon-download-in-png-blend-fbx-gltf-file-formats--design-pattern-gradient-pack-art-icons-6584981.png?f=webp"
  ],`400%`);



  let zoomLevel = 1; // Default zoom level (100%)

  if (screenWidth <= phone) {
    // alert(`phone`)
      zoomLevel = 2.0; // Zoom level for phone (300%)
      explorer_height_factor = 2.5
  } else if (screenWidth <= tablet) {
    // alert(`tablet`)

      zoomLevel = 0.8; // Zoom level for laptop (80%)
      explorer_height_factor = 1.5
  } else {
    // alert(`laptop`)

      zoomLevel = 1.0; // Default zoom level for larger screens (80%)
      explorer_height_factor = 1.5
      
      // window.onload = function() {
        // injectZoomSlider();
        // initializeZoom();
      // };
  }


  // Function to set the zoom level
function setZoom(zoomLevel) {
  document.body.style.zoom = zoomLevel + "%";
  document.getElementById('zoomValue').textContent = zoomLevel + "%";
  localStorage.setItem('zoomLevel', zoomLevel);
}

// Function to initialize the zoom level
function initializeZoom() {
  const savedZoomLevel = localStorage.getItem('zoomLevel');
  if (savedZoomLevel) {
      setZoom(parseInt(savedZoomLevel, 10));
      document.getElementById('zoomSlider').value = savedZoomLevel;
  }
}

// Function to inject the zoom slider into the w-taskbar element
function injectZoomSlider() {
  const wTaskbar = document.querySelector('.right');

  // Create the slider element
  const slider = document.createElement('input');
  slider.type = 'range';
  slider.classList.add('slider');
  slider.min = '60';
  slider.max = '100';
  slider.value = '90';
  slider.top = '10%';
  slider.zIndex = '1';
  // Create the span element to display the zoom value
  const zoomValue = document.createElement('span');
  zoomValue.id = 'zoomValue';
  zoomValue.textContent = '90%';

  // Append the slider and span to the w-taskbar element
  wTaskbar.appendChild(slider);
  wTaskbar.appendChild(zoomValue);
  // Add event listener to the slider
  slider.addEventListener('input', function() {
    const zoomLevel = this.value;
    setZoom(zoomLevel);
  });
  console.log(slider)
  return slider
}


// Initialize the zoom level and inject the slider when the page loads

  const desktop = document.querySelector("body > w-desktop");
  if (desktop) {
    desktop.style.zoom = zoomLevel * 100 + "%";     
  }
}

// Initial adjustment
document.addEventListener('DOMContentLoaded', function() {
  window.onload = function() {
  autoZoom();
  // window.addEventListener('resize', autoZoom);

    }
});

// taskbar effect
//pattern
function patternize(targetElementSelector, emojisOrImages = ["🚀"], patternHeight = "200%") {
  // Find the target element
  const targetElement = document.querySelector(targetElementSelector);
  if (!targetElement) {
    console.warn(`Target element with selector "${targetElementSelector}" not found!`);
    return;
  }

  // Create the SVG pattern element
  const patternElement = document.createElement('div');
  let patternContent = '';

  // Loop through the emojis or images and create the pattern content
  emojisOrImages.forEach((item, index) => {
    const isImage = item.startsWith('http'); // Check if the item is an image URL
    if (isImage) {
      // Add an <image> tag for image URLs
      patternContent += `<image xlink:href="${item}" width="45" height="35" x="${index * 45}" y="0" />`;
    } else {
      // Add a <text> tag for emojis
      patternContent += `<text class="gradient-emoji" font-size="22" x="${index * 45}" y="25">${item}</text>`;
    }
  });

  // Create the SVG pattern
  patternElement.innerHTML = `<svg version="1.1" baseProfile="full" width="100%" height="${patternHeight}" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <pattern id="patternitself" width="${emojisOrImages.length * 45}" height="35" patternUnits="userSpaceOnUse">
      ${patternContent}
    </pattern>
    <rect width="100%" height="100%" fill="url(#patternitself)" />
  </svg>`;

  // Apply styles to the pattern element
  patternElement.style.position = 'absolute';
  patternElement.style.zIndex = '-1';
  patternElement.style.width = '100%';
  patternElement.style.height = patternHeight;
  patternElement.style.bottom = '-10px';
  patternElement.style.opacity = '0.4';
  patternElement.style.filter = 'blur(1px)';



  // Append the pattern element to the target element
  targetElement.appendChild(patternElement);



  // Add animation to the pattern element
  let direction = 1; // 1 for down, -1 for up
  let position = 0; // current position of the element
  const maxPosition = 100; // maximum position before direction flip
  const speed = 0.4; // speed of animation

  function animate() {
    position += direction * speed;

    // Flip direction when position reaches maxPosition or 0
    if (position >= maxPosition || position <= 0) {
      direction *= -1;
    }

    patternElement.style.bottom = position + 'px';

    requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);


  const patternitself = document.querySelector('#patternitself');

  patternitself.style.transform = 'rotate(30deg) scale(0.7)';

}
