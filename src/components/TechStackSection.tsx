"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import gsap from "gsap";
import LaserFlow from "./animations/LazerFlow";
import { Description } from "./icons/MaterialIcon";

// ─── Tech Data ──────────────────────────────────────────────────────────────
const techCategories = [
  {
    category: "Languages",
    color: "var(--neon-green)",
    items: [
      { name: "Java", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639"/></svg>, level: "Advanced" },
      { name: "Python", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.25.18l.9.2.73.26.59.3.45.32.34.34.25.34.16.33.1.3.04.26.02.2-.01.13V8.5l-.05.63-.13.55-.21.46-.26.38-.3.31-.33.25-.35.19-.35.14-.33.1-.3.07-.26.04-.21.02H8.77l-.69.05-.59.14-.5.22-.41.27-.33.32-.27.35-.2.36-.15.37-.1.35-.07.32-.04.27-.02.21v3.06H3.17l-.21-.03-.28-.07-.32-.12-.35-.18-.36-.26-.36-.36-.35-.46-.32-.59-.28-.73-.21-.88-.14-1.05-.05-1.23.06-1.22.16-1.04.24-.87.32-.71.36-.57.4-.44.42-.33.42-.24.4-.16.36-.1.32-.05.24-.01h.16l.06.01h8.16v-.83H6.18l-.01-2.75-.02-.37.05-.34.11-.31.17-.28.25-.26.31-.23.38-.2.44-.18.51-.15.58-.12.64-.1.71-.06.77-.04.84-.02 1.27.05zm-6.3 1.98l-.23.33-.08.41.08.41.23.34.33.22.41.09.41-.09.33-.22.23-.34.08-.41-.08-.41-.23-.33-.33-.22-.41-.09-.41.09zm13.09 3.95l.28.06.32.12.35.18.36.27.36.35.35.47.32.59.28.73.21.88.14 1.04.05 1.23-.06 1.23-.16 1.04-.24.86-.32.71-.36.57-.4.45-.42.33-.42.24-.4.16-.36.09-.32.05-.24.02-.16-.01h-8.22v.82h5.84l.01 2.76.02.36-.05.34-.11.31-.17.29-.25.25-.31.24-.38.2-.44.17-.51.15-.58.13-.64.09-.71.07-.77.04-.84.01-1.27-.04-1.07-.14-.9-.2-.73-.25-.59-.3-.45-.33-.34-.34-.25-.34-.16-.33-.1-.3-.04-.25-.02-.2.01-.13v-5.34l.05-.64.13-.54.21-.46.26-.38.3-.32.33-.24.35-.2.35-.14.33-.1.3-.06.26-.04.21-.02.13-.01h5.84l.69-.05.59-.14.5-.21.41-.28.33-.32.27-.35.2-.36.15-.36.1-.35.07-.32.04-.28.02-.21V6.07h2.09l.14.01zm-6.47 14.25l-.23.33-.08.41.08.41.23.33.33.23.41.08.41-.08.33-.23.23-.33.08-.41-.08-.41-.23-.33-.33-.23-.41-.08-.41.08z"/></svg>, level: "Advanced" },
      { name: "Rust", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.8346 11.7033l-1.0073-.6236a13.7268 13.7268 0 00-.0283-.2936l.8656-.8069a.3483.3483 0 00-.1154-.578l-1.1066-.414a8.4958 8.4958 0 00-.087-.2856l.6904-.9587a.3462.3462 0 00-.2257-.5446l-1.1663-.1894a9.3574 9.3574 0 00-.1407-.2622l.4747-1.0761a.3437.3437 0 00-.3245-.4863l-1.1845.0416a6.7444 6.7444 0 00-.1873-.2268l.2373-1.1545a.3442.3442 0 00-.4087-.4104l-1.1592.2304a7.7941 7.7941 0 00-.2237-.1855l-.0145-1.1884a.3437.3437 0 00-.4736-.3176l-1.0918.4069a8.9936 8.9936 0 00-.2526-.1366l-.2623-1.1761a.3442.3442 0 00-.5184-.2106l-.9852.5765a10.5075 10.5075 0 00-.2698-.0835l-.4927-1.1169a.3437.3437 0 00-.5765-.099l-.839.7326a12.1358 12.1358 0 00-.2765-.0289l-.7004-1.0112a.3437.3437 0 00-.5765.099l-.4927 1.1169a10.5075 10.5075 0 00-.2698.0835l-.9852-.5765a.3442.3442 0 00-.5765.2106l-.2623 1.1761a8.9936 8.9936 0 00-.2526.1366l-1.0918-.4069a.3437.3437 0 00-.4736.3176l-.0145 1.1884a7.7941 7.7941 0 00-.2237.1855l-1.1592-.2304a.3442.3442 0 00-.4087.4104l.2373 1.1545a6.7444 6.7444 0 00-.1873.2268l-1.1845-.0416a.3437.3437 0 00-.3245.4863l.4747 1.0761a9.3574 9.3574 0 00-.1407.2622l-1.1663.1894a.3462.3462 0 00-.2257.5446l.6904.9587a8.4958 8.4958 0 00-.087.2856l-1.1066.414a.3483.3483 0 00-.1154.578l.8656.8069a13.7268 13.7268 0 00-.0283.2936l-1.0073.6236a.3442.3442 0 000 .5765l1.0073.6236c.0072.0985.0163.1969.0283.2936l-.8656.8069a.3483.3483 0 00.1154.578l1.1066.414c.0269.0962.0553.1918.087.2856l-.6904.9587a.3462.3462 0 00.2257.5446l1.1663.1894c.0449.0882.0915.1757.1407.2622l-.4747 1.0761a.3437.3437 0 00.3245.4863l1.1845-.0416c.0608.0769.1226.1526.1873.2268l-.2373 1.1545a.3442.3442 0 00.4087.4104l1.1592-.2304c.0729.0639.1467.1255.2237.1855l.0145 1.1884a.3437.3437 0 00.4736.3176l1.0918-.4069c.0823.0476.166.0939.2526.1366l.2623 1.1761a.3442.3442 0 00.5184.2106l.9852-.5765c.0887.0299.1777.0575.2698.0835l.4927 1.1169a.3437.3437 0 00.5765.099l.839-.7326c.0912.0126.1827.0217.2765.0289l.7004 1.0112a.3437.3437 0 00.5765-.099l.4927-1.1169c.0921-.026.1811-.0536.2698-.0835l.9852.5765a.3442.3442 0 00.5765-.2106l.2623-1.1761c.0866-.0427.1703-.089.2526-.1366l1.0918.4069a.3437.3437 0 00.4736-.3176l.0145-1.1884c.077-.06.1508-.1216.2237-.1855l1.1592.2304a.3442.3442 0 00.4087-.4104l-.2373-1.1545c.0647-.0742.1265-.1499.1873-.2268l1.1845.0416a.3437.3437 0 00.3245-.4863l-.4747-1.0761c.0492-.0865.0958-.174.1407-.2622l1.1663-.1894a.3462.3462 0 00.2257-.5446l-.6904-.9587c.0317-.0938.0601-.1894.087-.2856l1.1066-.414a.3483.3483 0 00.1154-.578l-.8656-.8069c.012-.0968.0211-.1951.0283-.2936l1.0073-.6236a.3442.3442 0 000-.5765zM12 15a3 3 0 110-6 3 3 0 010 6z"/></svg>, level: "Intermediate" },
    ],
  },
  {
    category: "Frontend",
    color: "var(--neon-pink)",
    items: [
      { name: "React", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M14.23 12.004a2.236 2.236 0 01-2.235 2.236 2.236 2.236 0 01-2.236-2.236 2.236 2.236 0 012.235-2.236 2.236 2.236 0 012.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38a2.167 2.167 0 00-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44a24.173 24.173 0 00-3.107-.534A23.857 23.857 0 0012 4.004c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442a22.095 22.095 0 00-3.113.538 15.053 15.053 0 01-.254-1.42c-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87a22.35 22.35 0 01-2.21.098c-.74 0-1.477-.035-2.202-.093a20.436 20.436 0 01-1.183-1.86c-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868A21.31 21.31 0 0112 8.1zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174a18.175 18.175 0 01-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475a14.63 14.63 0 01-1.355.493c-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964a14.63 14.63 0 01-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295a.764.764 0 01-.553-.132c-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z"/></svg>, level: "Advanced" },
      { name: "Next.js", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.6737-.1147.7903-.1147 1.7245s.0185 1.0508.1147 1.7246c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.4495.5125.3636.0393.5765.0393 2.234.0393 1.6575 0 1.8709 0 2.234-.0393.8495-.0902 1.6706-.2614 2.4495-.5125 4.3496-1.4026 7.5567-5.1885 8.2087-9.6945.0962-.6738.1147-.7904.1147-1.7246 0-.934-.0185-1.0508-.1147-1.7245-.2724-1.8883-.9927-3.671-2.1415-5.2492-2.0222-2.8264-5.2152-4.6655-8.624-4.9728-.1477-.0113-.3139-.0275-.3636-.0328C11.8803.0013 11.747 0 11.5725 0z"/></svg>, level: "Advanced" },
      { name: "Vite", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="m8.286 10.578.512-8.657a.306.306 0 01.247-.282L17.377.006a.306.306 0 01.353.385l-1.558 5.403a.306.306 0 00.352.385l2.388-.46a.306.306 0 01.332.438l-6.79 13.55-.123.19a.294.294 0 01-.252.14c-.177 0-.35-.152-.305-.369l1.095-5.301a.306.306 0 00-.388-.355l-1.433.435a.306.306 0 01-.389-.354l.69-3.375a.306.306 0 00-.37-.36l-2.32.536a.306.306 0 01-.374-.316zm14.976-7.926L17.284 3.74l-.544 1.887 2.077-.4a.8.8 0 01.84.369.8.8 0 01.034.783L12.9 19.93l-.013.025-.015.023-.122.19a.801.801 0 01-.672.37.826.826 0 01-.634-.302.8.8 0 01-.16-.67l1.029-4.981-1.12.34a.81.81 0 01-.86-.262.802.802 0 01-.165-.67l.63-3.08-2.027.468a.808.808 0 01-.768-.233.81.81 0 01-.217-.6l.389-6.57-7.44-1.33a.612.612 0 00-.64.906L11.58 23.691a.612.612 0 001.066-.004l11.26-20.135a.612.612 0 00-.644-.9z"/></svg>, level: "Intermediate" },
      { name: "Three.js", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M.38 0a.268.268 0 00-.256.332l2.894 11.716a.268.268 0 00.01.04l2.89 11.708a.268.268 0 00.447.128L23.802 7.15a.268.268 0 00-.112-.45l-5.784-1.667a.268.268 0 00-.123-.035L6.38 1.715a.268.268 0 00-.144-.04L.456.01A.268.268 0 00.38 0z"/></svg>, level: "Intermediate" },
    ],
  },
  {
    category: "Backend & Data",
    color: "var(--neon-blue)",
    items: [
      { name: "MongoDB", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"/></svg>, level: "Advanced" },
      { name: "Postgres", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M23.5594 14.7228a.5. .5 0 00-.4123-.0438l-.0425.0106c-1.1-.2767-1.7517-.6518-2.067-1.1483-.3965-.6242-.295-1.3745.0083-2.1524.1448-.3717.3053-.753.44-1.1346.6466-1.8282.3233-3.3796-.964-4.6226C19.3924 4.6636 17.8625 3.7548 16 3.3003V2.594c0-.3312-.2688-.6-.6-.6h-6.8c-.3312 0-.6.2688-.6.6v.7063C6.1375 3.7548 4.6076 4.6636 3.478 5.6313c-1.2873 1.243-1.6106 2.7944-.964 4.6226.1347.3816.2952.7629.44 1.1346.3033.7779.4048 1.5282.0083 2.1524-.3153.4965-.967.8716-2.067 1.1483l-.0425-.0106a.5.5 0 00-.4123.0438.4924.4924 0 00-.2413.3388c-.1035.493.459.8498.459.8498 1.1827.5765 2.358.6498 3.4088.218.0682-.028.1342-.0586.199-.0916.3975 1.5 1.4875 2.7583 3.1573 3.6471 1.2844.6833 2.7663 1.0675 4.338 1.1373v.888c0 .3312.2688.6.6.6h1.2c.3312 0 .6-.2688.6-.6v-.888c1.5717-.0698 3.0536-.454 4.338-1.1373 1.6698-.8888 2.7598-2.1471 3.1573-3.6471.0648.033.1308.0636.199.0916 1.0508.4318 2.226.3585 3.4088-.218 0 0 .5625-.3568.459-.8498a.4924.4924 0 00-.2413-.3388z"/></svg>, level: "Intermediate" },
      { name: "Firebase", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.89 15.672L6.255.461A.542.542 0 017.27.288l2.543 4.771zm16.794 3.692l-2.25-14a.54.54 0 00-.919-.295L3.316 19.365l7.856 4.427a1.621 1.621 0 001.588 0zM14.3 7.147l-1.82-3.482a.542.542 0 00-.96 0L3.53 17.984z"/></svg>, level: "Intermediate" },
      { name: "Bun.js", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22.596c6.628 0 12-4.338 12-9.689 0-3.318-2.057-6.248-5.219-7.986-1.286 2.567-4.424 4.182-7.781 4.182s-6.495-1.615-7.781-4.182C.057 6.659 0 9.589 0 12.907c0 5.35 5.372 9.689 12 9.689zM8.58 4.932c.633-.201 1.136-.753 1.373-1.508.238.755.74 1.307 1.374 1.508-.634.2-1.136.752-1.374 1.507-.237-.755-.74-1.307-1.373-1.507zm4.14-2.37c.844-.269 1.514-1.005 1.83-2.012.317 1.007.987 1.743 1.831 2.011-.844.269-1.514 1.004-1.83 2.011-.317-1.007-.987-1.742-1.831-2.011zm-7.576 1.4c.422-.134.757-.502.916-1.006.158.504.493.872.915 1.006-.422.134-.757.502-.915 1.006-.159-.504-.494-.872-.916-1.006zM7 15.5a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm10 0a1.5 1.5 0 110-3 1.5 1.5 0 010 3zm-6.5 3c0-.828 1.343-1.5 3-1.5s3 .672 3 1.5-1.343 1.5-3 1.5-3-.672-3-1.5z"/></svg>, level: "Intermediate" },
    ],
  },
  {
    category: "DevOps & Cloud",
    color: "var(--hot-pink)",
    items: [
      { name: "Docker", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M13.983 11.078h2.119a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.119a.185.185 0 00-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 00.186-.186V3.574a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.186m0 2.716h2.118a.187.187 0 00.186-.186V6.29a.186.186 0 00-.186-.185h-2.118a.185.185 0 00-.185.185v1.887c0 .102.082.185.185.186m-2.93 0h2.12a.186.186 0 00.184-.186V6.29a.185.185 0 00-.185-.185H8.1a.185.185 0 00-.185.185v1.887c0 .102.083.185.185.186m-2.964 0h2.119a.186.186 0 00.185-.186V6.29a.185.185 0 00-.185-.185H5.136a.186.186 0 00-.186.185v1.887c0 .102.084.185.186.186m5.893 2.715h2.118a.186.186 0 00.186-.185V9.006a.186.186 0 00-.186-.186h-2.118a.185.185 0 00-.185.185v1.888c0 .102.082.185.185.185m-2.93 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.083.185.185.185m-2.964 0h2.119a.185.185 0 00.185-.185V9.006a.185.185 0 00-.185-.186h-2.12a.186.186 0 00-.185.186v1.887c0 .102.084.185.186.185m-2.92 0h2.12a.185.185 0 00.184-.185V9.006a.185.185 0 00-.184-.186h-2.12a.185.185 0 00-.184.185v1.888c0 .102.082.185.185.185M23.763 9.89c-.065-.051-.672-.51-1.954-.51-.338.001-.676.03-1.01.087-.248-1.7-1.653-2.53-1.716-2.566l-.344-.199-.226.327c-.284.438-.49.922-.612 1.43-.23.97-.09 1.882.403 2.661-.595.332-1.55.413-1.744.42H.751a.751.751 0 00-.75.748 11.376 11.376 0 00.692 4.062c.545 1.428 1.355 2.48 2.41 3.124 1.18.723 3.1 1.137 5.275 1.137.983.003 1.963-.086 2.93-.266a12.248 12.248 0 003.823-1.389c.98-.567 1.86-1.288 2.61-2.136 1.252-1.418 1.998-2.997 2.553-4.4h.221c1.372 0 2.215-.549 2.68-1.009.309-.293.55-.65.707-1.046l.098-.288z"/></svg>, level: "Advanced" },
      { name: "AWS", icon: <svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 01-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 01-.287-.375 6.18 6.18 0 01-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.03-.375-1.277-.255-.248-.686-.367-1.3-.367-.28 0-.568.031-.863.103a6.92 6.92 0 00-.862.272 2.287 2.287 0 01-.28.104.488.488 0 01-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 01.224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 011.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 00-.735-.136 6.02 6.02 0 00-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.24-.024-.304-.08-.064-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 01-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 01.32-.08h.638c.152 0 .256.025.32.08.063.048.12.16.151.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 01.311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 01-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 01-.303.08h-.687c-.151 0-.255-.024-.32-.08-.063-.056-.119-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.177.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 01-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 00.415-.758.777.777 0 00-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 01-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.575-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 01.24.2.43.43 0 01.071.263v.375c0 .168-.064.256-.184.256a.83.83 0 01-.303-.096 3.652 3.652 0 00-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.94-6.442 2.969-9.722 2.969-4.598 0-8.74-1.7-11.87-4.526-.246-.223-.026-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.607zM22.792 14.961c-.336-.43-2.22-.207-3.074-.103-.258.032-.298-.192-.063-.36 1.5-1.053 3.967-.75 4.254-.399.287.36-.08 2.826-1.485 4.007-.215.184-.423.088-.327-.151.319-.79 1.03-2.57.695-2.994z"/></svg>, level: "Intermediate" },
    ],
  },
];

// Flat list for marquee variants
const allTech = techCategories.flatMap((c) => c.items);

// ─── Variant Type ───────────────────────────────────────────────────────────
type Variant = "grid" | "orbit" | "brutalist" | "marquee";

interface TechStackSectionProps {
  resumeHref?: string;
  variant?: Variant;
}

// ═══════════════════════════════════════════════════════════════════════════
// VARIANT A — Interactive Grid with Glow + Scale hover
// ═══════════════════════════════════════════════════════════════════════════
function GridVariant() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll("[data-grid-item]");
    const cats = containerRef.current.querySelectorAll("[data-cat-header]");

    gsap.set(items, { opacity: 0, y: 50, scale: 0.9 });
    gsap.set(cats, { opacity: 0, x: -30 });

    const tl = gsap.timeline({ delay: 0.3 });

    tl.to(cats, {
      opacity: 1, x: 0,
      duration: 0.6, stagger: 0.15, ease: "power3.out",
    });

    tl.to(items, {
      opacity: 1, y: 0, scale: 1,
      duration: 0.5, stagger: 0.06, ease: "back.out(1.4)",
    }, "-=0.3");

    return () => { tl.kill(); };
  }, []);

  return (
    <div ref={containerRef} className="w-full flex-1 overflow-y-auto scrollbar-none pr-2">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 pb-4">
        {techCategories.map((cat) => (
          <div key={cat.category}>
            <div data-cat-header className="flex items-center gap-3 mb-4">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color, boxShadow: `0 0 12px ${cat.color}` }} />
              <span className="font-accent text-xs md:text-sm uppercase tracking-[0.25em] font-bold" style={{ color: cat.color }}>
                {cat.category}
              </span>
              <div className="flex-1 h-px bg-white/10" />
            </div>
            <div className="grid grid-cols-2 gap-3">
              {cat.items.map((tech) => (
                <div key={tech.name} data-grid-item
                  className="group relative bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-lg p-4 cursor-default hover:border-[var(--neon-pink)] hover:bg-white/[0.08] transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,0,255,0.15)] hover:scale-[1.04] active:scale-[0.98]">
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-[var(--neon-pink)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative flex items-center gap-3">
                    <div className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-white/60 group-hover:text-white group-hover:scale-110 transition-all duration-300 [&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-8 md:[&>svg]:h-8">
                      {tech.icon}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-accent font-bold text-sm md:text-base text-white/90 group-hover:text-white transition-colors">{tech.name}</span>
                      <span className="font-body text-[10px] text-white/30 uppercase tracking-wider group-hover:text-white/50 transition-colors">{tech.level}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// VARIANT B — Radial Orbit with Flip Card hover
// ═══════════════════════════════════════════════════════════════════════════
function OrbitVariant() {
  const containerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);
  const [flipped, setFlipped] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    const orbit = orbitRef.current;
    if (!container || !orbit) return;

    const handleMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
      gsap.to(orbit, { x: x * 12, y: y * 8, duration: 0.8, ease: "power2.out" });
    };

    container.addEventListener("mousemove", handleMove);
    return () => container.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    if (!containerRef.current) return;
    const center = containerRef.current.querySelector("[data-orbit-center]");
    const items = containerRef.current.querySelectorAll("[data-orbit-item]");
    const rings = containerRef.current.querySelectorAll("[data-orbit-ring]");

    const tl = gsap.timeline({ delay: 0.3 });

    if (center) {
      gsap.set(center, { scale: 0, opacity: 0 });
      tl.to(center, { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(2)" });
    }

    gsap.set(rings, { opacity: 0, scale: 0.8 });
    tl.to(rings, { opacity: 1, scale: 1, duration: 0.8, ease: "power2.out", stagger: 0.2 }, "-=0.3");

    gsap.set(items, { opacity: 0, scale: 0 });
    tl.to(items, { opacity: 1, scale: 1, duration: 0.5, stagger: 0.07, ease: "back.out(1.8)" }, "-=0.4");

    return () => { tl.kill(); };
  }, []);

  const innerItems = allTech.slice(0, 6);
  const outerItems = allTech.slice(6);

  const getPosition = (index: number, total: number, rx: number, ry: number) => {
    const angle = (index / total) * Math.PI * 2 - Math.PI / 2;
    return {
      left: `calc(50% + ${Math.cos(angle) * rx}px)`,
      top: `calc(50% + ${Math.sin(angle) * ry}px)`,
    };
  };

  return (
    <div ref={containerRef} className="w-full flex-1 relative flex items-center justify-center overflow-hidden">
      <div ref={orbitRef} className="relative w-full h-full max-w-[600px] max-h-[500px] mx-auto">
        <div data-orbit-ring className="absolute inset-4 md:inset-8 rounded-full border border-white/[0.06]" style={{ animation: "orbit-pulse 4s ease-in-out infinite" }} />
        <div data-orbit-ring className="absolute inset-16 md:inset-24 rounded-full border border-[var(--neon-pink)]/10" />

        <div data-orbit-center className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 md:w-28 md:h-28 rounded-full bg-gradient-to-br from-[var(--neon-pink)]/20 to-[var(--royal-purple)]/20 border border-[var(--neon-pink)]/30 flex items-center justify-center z-10"
          style={{ boxShadow: "0 0 40px rgba(255,0,255,0.15), inset 0 0 30px rgba(255,0,255,0.05)" }}>
          <span className="font-display text-xl md:text-3xl text-white/80 tracking-tighter">STACK</span>
        </div>

        {innerItems.map((tech, i) => {
          const pos = getPosition(i, innerItems.length, 110, 90);
          const isFlipped = flipped === tech.name;
          return (
            <div key={tech.name} data-orbit-item className="absolute -translate-x-1/2 -translate-y-1/2 z-20 perspective-1000"
              style={{ left: pos.left, top: pos.top }}
              onMouseEnter={() => setFlipped(tech.name)} onMouseLeave={() => setFlipped(null)}>
              <div className={`relative w-16 h-16 md:w-20 md:h-20 preserve-3d transition-transform duration-500 cursor-default ${isFlipped ? "rotate-y-180" : ""}`}>
                <div className="absolute inset-0 backface-hidden bg-white/[0.06] backdrop-blur-sm border border-white/15 rounded-xl flex flex-col items-center justify-center gap-1 hover:border-[var(--neon-pink)]/50 hover:shadow-[0_0_20px_rgba(255,0,255,0.2)] transition-all">
                  <div className="[&>svg]:w-6 [&>svg]:h-6 md:[&>svg]:w-7 md:[&>svg]:h-7 text-white/70">{tech.icon}</div>
                  <span className="font-accent text-[9px] md:text-[10px] text-white/60 uppercase tracking-wider">{tech.name}</span>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[var(--neon-pink)]/20 to-[var(--royal-purple)]/20 border border-[var(--neon-pink)]/30 rounded-xl flex flex-col items-center justify-center gap-1 p-2">
                  <span className="font-accent text-[10px] md:text-xs font-bold text-white">{tech.name}</span>
                  <span className="font-body text-[8px] md:text-[9px] text-[var(--neon-green)] uppercase tracking-wider">{tech.level}</span>
                </div>
              </div>
            </div>
          );
        })}

        {outerItems.map((tech, i) => {
          const pos = getPosition(i, outerItems.length, 190, 160);
          const isFlipped = flipped === tech.name;
          return (
            <div key={tech.name} data-orbit-item className="absolute -translate-x-1/2 -translate-y-1/2 z-20 perspective-1000 hidden md:block"
              style={{ left: pos.left, top: pos.top }}
              onMouseEnter={() => setFlipped(tech.name)} onMouseLeave={() => setFlipped(null)}>
              <div className={`relative w-16 h-16 md:w-[72px] md:h-[72px] preserve-3d transition-transform duration-500 cursor-default ${isFlipped ? "rotate-y-180" : ""}`}>
                <div className="absolute inset-0 backface-hidden bg-white/[0.04] backdrop-blur-sm border border-white/10 rounded-xl flex flex-col items-center justify-center gap-1 hover:border-[var(--neon-blue)]/40 hover:shadow-[0_0_18px_rgba(0,240,255,0.15)] transition-all">
                  <div className="[&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6 text-white/60">{tech.icon}</div>
                  <span className="font-accent text-[8px] md:text-[9px] text-white/50 uppercase tracking-wider">{tech.name}</span>
                </div>
                <div className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-[var(--neon-blue)]/20 to-[var(--royal-purple)]/20 border border-[var(--neon-blue)]/30 rounded-xl flex flex-col items-center justify-center gap-1 p-2">
                  <span className="font-accent text-[10px] md:text-xs font-bold text-white">{tech.name}</span>
                  <span className="font-body text-[8px] md:text-[9px] text-[var(--neon-pink)] uppercase tracking-wider">{tech.level}</span>
                </div>
              </div>
            </div>
          );
        })}

        <div className="md:hidden absolute bottom-0 left-0 right-0 flex flex-wrap justify-center gap-2 p-2">
          {outerItems.map((tech) => (
            <div key={`mobile-${tech.name}`} className="bg-white/[0.05] border border-white/10 rounded-lg px-3 py-2 flex items-center gap-2">
              <div className="[&>svg]:w-4 [&>svg]:h-4 text-white/60">{tech.icon}</div>
              <span className="font-accent text-[10px] text-white/70">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// VARIANT C — Brutalist Typography Wall with Tooltip hover
// ═══════════════════════════════════════════════════════════════════════════
function BrutalistVariant() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTooltip, setActiveTooltip] = useState<{ name: string; category: string; level: string; x: number; y: number } | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    const items = containerRef.current.querySelectorAll("[data-brut-item]");

    gsap.set(items, { opacity: 0, filter: "blur(20px)", y: 30 });

    const tl = gsap.timeline({ delay: 0.3 });
    tl.to(items, {
      opacity: 1, filter: "blur(0px)", y: 0,
      duration: 0.7, stagger: 0.05, ease: "power2.out",
    });

    return () => { tl.kill(); };
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent, tech: { name: string; level: string }, category: string) => {
    setActiveTooltip({ name: tech.name, category, level: tech.level, x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseLeave = useCallback(() => {
    setActiveTooltip(null);
  }, []);

  const sizes = ["text-[10vw]", "text-[7vw]", "text-[5vw]", "text-[8vw]", "text-[6vw]", "text-[9vw]", "text-[4vw]", "text-[11vw]", "text-[5vw]", "text-[7vw]", "text-[6vw]", "text-[8vw]", "text-[4vw]", "text-[9vw]"];
  const colors = [
    "text-[var(--neon-pink)]", "text-[var(--neon-green)]", "text-[var(--neon-blue)]",
    "text-white", "text-[var(--hot-pink)]", "text-[var(--neon-green)]",
    "text-[var(--neon-blue)]", "text-[var(--neon-pink)]", "text-white",
    "text-[var(--hot-pink)]", "text-[var(--neon-green)]", "text-[var(--neon-blue)]",
    "text-[var(--neon-pink)]", "text-white",
  ];
  const outlines = [false, false, true, false, true, false, true, false, false, true, false, true, false, false];

  const flatItems = techCategories.flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.category }))
  );

  return (
    <div ref={containerRef} className="w-full flex-1 overflow-y-auto scrollbar-none relative">
      {activeTooltip && (
        <div className="fixed z-[100] pointer-events-none px-4 py-2 bg-black/90 border border-white/20 rounded-md backdrop-blur-sm"
          style={{ left: activeTooltip.x + 16, top: activeTooltip.y - 40, transform: "translateY(-50%)" }}>
          <span className="font-accent text-xs uppercase tracking-wider text-[var(--neon-pink)] block">{activeTooltip.category}</span>
          <span className="font-body text-[10px] text-white/60 uppercase tracking-wider">{activeTooltip.level}</span>
        </div>
      )}

      <div className="flex flex-wrap items-baseline gap-x-4 md:gap-x-6 gap-y-0 leading-none pb-4">
        {flatItems.map((tech, i) => (
          <div key={tech.name} data-brut-item
            className={`font-display uppercase cursor-default select-none transition-all duration-300 hover:scale-105
                        ${sizes[i % sizes.length]} ${outlines[i % outlines.length] ? "text-stroke-sm" : ""} ${colors[i % colors.length]}
                        hover:text-white relative group`}
            onMouseMove={(e) => handleMouseMove(e, tech, tech.category)}
            onMouseLeave={handleMouseLeave}>
            <div className="absolute -top-2 -right-2 md:-top-3 md:-right-3 opacity-0 group-hover:opacity-60 transition-opacity duration-300 [&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6 text-white/40">
              {tech.icon}
            </div>
            {tech.name}
          </div>
        ))}
      </div>

      <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-[var(--neon-pink)]/20 to-transparent transform rotate-12 origin-top-right pointer-events-none" />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// VARIANT D — Enhanced Dual-Band Marquee with entrance animation
// ═══════════════════════════════════════════════════════════════════════════
function MarqueeVariant() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    const topBand = containerRef.current.querySelector("[data-band-top]");
    const bottomBand = containerRef.current.querySelector("[data-band-bottom]");
    const divider = containerRef.current.querySelector("[data-band-divider]");

    const tl = gsap.timeline({ delay: 0.3 });

    if (topBand) {
      gsap.set(topBand, { x: "100vw", opacity: 0 });
      tl.to(topBand, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" });
    }
    if (divider) {
      gsap.set(divider, { scaleX: 0, opacity: 0 });
      tl.to(divider, { scaleX: 1, opacity: 1, duration: 0.6, ease: "power2.out" }, "-=0.6");
    }
    if (bottomBand) {
      gsap.set(bottomBand, { x: "-100vw", opacity: 0 });
      tl.to(bottomBand, { x: 0, opacity: 1, duration: 1.2, ease: "power3.out" }, "-=0.8");
    }

    return () => { tl.kill(); };
  }, []);

  const duplicated = [...allTech, ...allTech];
  const bottomHalf = [...allTech.slice(7), ...allTech.slice(0, 7), ...allTech.slice(7), ...allTech.slice(0, 7)];

  return (
    <div ref={containerRef} className="w-full flex-1 flex flex-col justify-center gap-0 overflow-hidden"
      onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>

      <div data-band-top className="relative w-full overflow-hidden py-4 marquee-fade-mask">
        <div className="absolute inset-0 bg-white/[0.03] border-y border-white/10" />
        <div className="relative flex whitespace-nowrap">
          <div className="flex gap-4 md:gap-6"
            style={{ animation: "scroll-left 30s linear infinite", animationPlayState: isPaused ? "paused" : "running" }}>
            {duplicated.map((tech, i) => (
              <div key={`top-${tech.name}-${i}`}
                className="flex items-center gap-2 md:gap-3 font-accent font-bold text-base md:text-2xl uppercase tracking-wide border border-white/10 rounded-full px-5 py-2.5 bg-white/[0.03] backdrop-blur-sm hover:bg-white hover:text-black hover:border-white transition-all duration-300 cursor-default shrink-0 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <div className="[&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">{tech.icon}</div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div data-band-divider className="relative flex items-center gap-4 px-8 py-3 origin-left">
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--neon-pink)]/40 to-transparent" />
        <span className="font-accent text-[10px] uppercase tracking-[0.3em] text-white/30 shrink-0">{allTech.length} Technologies</span>
        <div className="flex-1 h-px bg-gradient-to-r from-transparent via-[var(--neon-pink)]/40 to-transparent" />
      </div>

      <div data-band-bottom className="relative w-full overflow-hidden py-4 marquee-fade-mask">
        <div className="absolute inset-0 bg-white/[0.03] border-y border-white/10" />
        <div className="relative flex whitespace-nowrap">
          <div className="flex gap-4 md:gap-6"
            style={{ animation: "scroll-right 40s linear infinite", animationPlayState: isPaused ? "paused" : "running" }}>
            {bottomHalf.map((tech, i) => (
              <div key={`bot-${tech.name}-${i}`}
                className="flex items-center gap-2 md:gap-3 font-accent font-bold text-base md:text-2xl uppercase tracking-wide border border-white/10 rounded-full px-5 py-2.5 bg-white/[0.03] backdrop-blur-sm hover:bg-[var(--neon-pink)] hover:text-black hover:border-[var(--neon-pink)] transition-all duration-300 cursor-default shrink-0 hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]">
                <div className="[&>svg]:w-5 [&>svg]:h-5 md:[&>svg]:w-6 md:[&>svg]:h-6">{tech.icon}</div>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAIN COMPONENT — Shared Shell
// ═══════════════════════════════════════════════════════════════════════════
export default function TechStackSection({ resumeHref = "#", variant = "grid" }: TechStackSectionProps) {
  const variantMap: Record<Variant, React.ReactNode> = {
    grid: <GridVariant />,
    orbit: <OrbitVariant />,
    brutalist: <BrutalistVariant />,
    marquee: <MarqueeVariant />,
  };

  return (
    <section className="snap-start-card w-[var(--card-width)] min-w-[var(--card-width)] max-w-[var(--card-width)] h-full bg-black text-white flex flex-col relative shrink-0 overflow-hidden">
      <LaserFlow
        revealImageSrc="/Gemini_Generated_Image_36s53m36s53m36s5%20(1).webp"
        horizontalBeamOffset={0.1}
        verticalBeamOffset={-0.31}
        color="#EEAECA"
        horizontalSizing={0.9}
        verticalSizing={3}
        wispDensity={1}
        wispSpeed={15}
        wispIntensity={5}
        flowSpeed={0.3}
        flowStrength={0.25}
        fogIntensity={0.4}
        fogScale={0.8}
        fogFallSpeed={0.6}
        decay={1.1}
        falloffStart={1.2}
      >
        <div className="absolute inset-0 flex flex-col p-6 md:p-8 z-10 pointer-events-none">
          {/* Watermark number */}
          <div className="absolute top-8 md:top-12 right-8 md:right-12 text-[15vw] font-display opacity-[0.06] leading-none pointer-events-none text-white select-none">
            03
          </div>

          {/* Header Block */}
          <div className="shrink-0 mt-16 md:mt-20 mb-4 md:mb-6 pointer-events-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-block px-3 py-1 bg-white text-black font-accent text-[10px] uppercase tracking-wider font-bold">
                Core Competencies
              </div>
              <div className="w-8 h-px bg-[var(--neon-pink)]" />
              <span className="font-accent text-[9px] uppercase text-white/25 tracking-[0.2em]">
                {allTech.length} skills
              </span>
            </div>
            <h2 className="font-display text-[12vw] md:text-[10vw] uppercase leading-[0.85] tracking-tighter mix-blend-difference text-[var(--hot-pink)]">
              TECH<br />
              <span className="text-stroke-sm text-[var(--neon-pink)]">STACK</span>
            </h2>
          </div>

          {/* Variant Content */}
          <div className="flex-1 min-h-0 pointer-events-auto overflow-hidden flex flex-col">
            {variantMap[variant]}
          </div>

          {/* Footer */}
          <div className="shrink-0 flex justify-between items-end border-t border-white/15 pt-6 md:pt-8 mt-4 pointer-events-auto">
            <div className="flex items-baseline gap-4">
              <span className="font-display text-3xl md:text-4xl uppercase tracking-tighter italic">TOOLKIT</span>
              <span className="font-accent text-[9px] uppercase tracking-[0.2em] text-white/25 hidden md:inline">
                Variant: {variant}
              </span>
            </div>
            <a href={resumeHref} target="_blank" rel="noopener noreferrer" className="group cursor-pointer flex items-center gap-3">
              <span className="uppercase font-bold tracking-widest text-xs font-accent text-white/70 group-hover:text-white transition-colors">Resume</span>
              <div className="w-9 h-9 rounded-full border border-white/30 flex items-center justify-center group-hover:bg-white group-hover:text-black group-hover:border-white group-hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300">
                <Description className="text-sm" />
              </div>
            </a>
          </div>
        </div>
      </LaserFlow>
    </section>
  );
}
