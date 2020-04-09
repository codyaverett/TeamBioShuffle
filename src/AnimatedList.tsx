import * as React from 'react';
import { motion } from 'framer-motion';

const spring = {
  type: 'spring',
  damping: 10,
  stiffness: 50
};

interface Props<T> {
  items: T[];
  watchKey: string;
  render?: (item: T) => React.ReactNode;
  children?: (item: T) => React.ReactNode;
  style?: React.CSSProperties;
  spring?: typeof spring;
}

const ulStyle: React.CSSProperties = {
  listStyle: 'none',
  display: 'flex',
  flexWrap: 'wrap'
};

/**
 * List of items that animates list items into
 * their new order
 * @param props.items array of items to iterate in render
 * @param props.watchKey unique key of each item to watch
 * @param props.render Control render of data item
 * @param props.children Alternative to render prop (function as child)
 * @param props.style CSS style overrides
 * @param props.spring spring options
 */
export function AnimatedList<T>(props: Props<T>) {
  const Render = props.render || props.children;

  if (!Render) {
    throw new Error(`Animated list expects render prop or function as child.`);
  }

  return (
    <ul style={ulStyle}>
      {props.items.map((item) => {
        return (
          <motion.li
            key={item[props.watchKey]}
            layoutTransition={props.spring || spring}
            style={props.style}>
            {Render(item)}
          </motion.li>
        );
      })}
    </ul>
  );
}
