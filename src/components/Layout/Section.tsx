import classNames from 'classnames';
import {FC, memo, PropsWithChildren} from 'react';

import {SectionId} from '../../data/data';

const Section: FC<
  PropsWithChildren<{sectionId: SectionId; sectionTitle?: string; noPadding?: boolean; className?: string}>
> = memo(({children, sectionId, noPadding = false, className}) => {
  return (
    <section className={classNames(className,
        'scroll-mt-[100px]',     // scroll margin for smooth nav
        'min-h-[80vh]',          // nsures section is tall enough for intersection
        { 'px-4 py-16 md:py-24 lg:px-8': !noPadding })
    } id={sectionId}>
      <div className={classNames({'mx-auto max-w-screen-lg': !noPadding})}>{children}</div>
    </section>
)});

Section.displayName = 'Section';
export default Section;
