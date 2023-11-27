
/**
 * The `NavItems` component is a React component that renders a list of navigation items and handles
 * the opening and closing of submenus.
 * @returns The `NavItems` component is being returned.
 */
"use client";

import { PRODUCT_CATEGORIES } from "@/constant";
import { useRef, useState } from "react";
import NavItem from "./nav-item";
import { useOnClickOutside } from "@/hooks/use-onclick-outside";

const NavItems = () => {
  /**
    * The `activeIndex` state is used to keep track of the index of the currently active navigation item.
    * If the value is `null`, no navigation item is active.
    */
  const [activeIndex, setActiveIndex] = useState<null | number>(null);

  /**
    * The `isAnyOpen` variable is a boolean that indicates whether any navigation item is currently open.
    */
  const isAnyOpen = activeIndex !== null;

  /**
    * The `navRef` ref is used to reference the root element of the navigation items component.
    */
  const navRef = useRef<HTMLDivElement | null>(null);

  /**
    * The `useOnClickOutside` hook is used to close the active navigation when a click occurs outside of it.
    */
  useOnClickOutside(navRef, () => setActiveIndex(null));

  return (
    <div className="flex gap-4 h-full" ref={navRef}>
      {PRODUCT_CATEGORIES.map((product, i) => {
        /**
         * The `handleMenu` function is used to handle the opening and closing of the navigation item's submenu.
         */
        const handleMenu = () => {
          if (activeIndex === i) {
            setActiveIndex(null);
          } else {
            setActiveIndex(i);
          }
        };

        /**
         * The `isOpen` variable is a boolean that indicates whether the current navigation item is open.
         */
        const isOpen = i === activeIndex;

        return (
          <div key={product.label}>
            <NavItem
              category={product}
              handleOpen={handleMenu}
              isOpen={isOpen}
              isAnyOpen={isAnyOpen}
            />
          </div>
        );
      })}
    </div>
  );
}

export default NavItems
//
//This code has been updated with proper comment Comments have been added to clarify the purpose each part of the code and to provide concise explanations..</s>