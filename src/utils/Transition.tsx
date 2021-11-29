import React, { useRef, useEffect, FC } from 'react';
import { CSSTransition as ReactCSSTransition } from 'react-transition-group';

interface Props {
  show: boolean,
  appear: any,
  [x: string]: any
}

const TransitionContext = React.createContext({
  parent: {}
})

const useIsInitialRender = () => {
  const isInitialRender = useRef(true);
  useEffect(() => {
    isInitialRender.current = false;
  }, [])
  return isInitialRender.current;
}

const CSSTransition: FC<Props> = ({
  show,
  enter = '',
  enterStart = '',
  enterEnd = '',
  leave = '',
  leaveStart = '',
  leaveEnd = '',
  appear,
  unmountOnExit,
  tag = 'div',
  children,
  ...rest
}) => {
  const enterClasses = enter.split(' ').filter((s: string) => s.length);
  const enterStartClasses = enterStart.split(' ').filter((s: string) => s.length);
  const enterEndClasses = enterEnd.split(' ').filter((s: string) => s.length);
  const leaveClasses = leave.split(' ').filter((s: string) => s.length);
  const leaveStartClasses = leaveStart.split(' ').filter((s: string) => s.length);
  const leaveEndClasses = leaveEnd.split(' ').filter((s: string) => s.length);
  const removeFromDom = unmountOnExit;

  function addClasses(node: any, classes: any) {
    classes.length && node.classList.add(...classes);
  }

  function removeClasses(node: any, classes: any) {
    classes.length && node.classList.remove(...classes);
  }

  const nodeRef = useRef(document.createElement("div"));
  const Component = tag;

  return (
    <ReactCSSTransition
      appear={appear}
      nodeRef={nodeRef}
      unmountOnExit={removeFromDom}
      in={show}
      addEndListener={(done: any) => {
        nodeRef.current.addEventListener('transitionend', done, false)
      }}
      onEnter={() => {
        if (!removeFromDom) nodeRef.current.style.display = '';
        addClasses(nodeRef.current, [...enterClasses, ...enterStartClasses])
      }}
      onEntering={() => {
        removeClasses(nodeRef.current, enterStartClasses)
        addClasses(nodeRef.current, enterEndClasses)
      }}
      onEntered={() => {
        removeClasses(nodeRef.current, [...enterEndClasses, ...enterClasses])
      }}
      onExit={() => {
        addClasses(nodeRef.current, [...leaveClasses, ...leaveStartClasses])
      }}
      onExiting={() => {
        removeClasses(nodeRef.current, leaveStartClasses)
        addClasses(nodeRef.current, leaveEndClasses)
      }}
      onExited={() => {
        removeClasses(nodeRef.current, [...leaveEndClasses, ...leaveClasses])
        if (!removeFromDom) nodeRef.current.style.display = 'none';
      }}
    >
      <Component ref={nodeRef} {...rest} style={{ display: !removeFromDom ? 'none': null }}>{children}</Component>
    </ReactCSSTransition>
  )
}

const Transition = ({ show, appear, ...rest } : {show: boolean, appear: any, [x: string]: any}) => {
  const isInitialRender = useIsInitialRender();
  const isChild = show === undefined;

  if (isChild) {
    return (
      <CSSTransition
        appear={appear || !isInitialRender}
        show={show}
        {...rest}
      />
    )
  }

  return (
    <TransitionContext.Provider
      value={{
        parent: {
          show,
          isInitialRender,
          appear,
        },
      }}
    >
      <CSSTransition appear={appear} show={show} {...rest} />
    </TransitionContext.Provider>
  )
}

export default Transition;