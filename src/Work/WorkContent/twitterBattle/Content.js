import React from 'react';
import FlexRow from 'components/FlexRow/FlexRow';
import FlexItem from 'components/FlexItem/FlexItem';

import ScreenshotOne from './ScreenshotOne.png';
import ScreenshotTwo from './ScreenshotTwo.png';

import UIFadeIn from 'components/effects/UIFadeIn';
import UIImage from 'components/image/UIImage';

const Content = (props) => {
  return (
    <div>
      <FlexRow>
        <FlexItem size={5} sizeSm={7} offset={1} offsetSm={0}>
          <UIFadeIn>
            <UIImage translucent={true} src={ScreenshotOne} />
          </UIFadeIn>
        </FlexItem>
      </FlexRow>

      <FlexRow>
        <FlexItem size={5} sizeSm={7} offset={1} offsetSm={0}>
          <UIFadeIn>
            <p>
              On initial load the client queries the /random endpoint on the server and receives a
              random set of 5 colors which is then caches and displays the first in the array.
            </p>
            <p>
              While the user goes through the tutorial, the keyboard events are conditionally
              blocked based on the current onboarding step using middleware from redux-thunk, i.e.
              they can't dislike a color when the tutorial is telling them to like a color.
            </p>
          </UIFadeIn>
        </FlexItem>
      </FlexRow>

      <FlexRow>
        <FlexItem size={5} sizeSm={7} offset={1} offsetSm={0}>
          <UIFadeIn>
            <UIImage  translucent={true} src={ScreenshotTwo} />
          </UIFadeIn>
        </FlexItem>
      </FlexRow>
    </div>
  )
}

export default Content;
