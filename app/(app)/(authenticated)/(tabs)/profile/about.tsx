import React from "react";
import { ScrollView } from "react-native";

import { ProfileScreenWrapper } from "@/shared/components/screens/profile/ProfileScreenWrapper";
import { Typography } from "@/shared/components/ui/Typography";

const About = () => {
  return (
    <ProfileScreenWrapper withAppVersion withoutAvatar>
      <Typography className="mb-4 font-montserrat-bold text-lg">
        Lorem ipsum dolor sit amet:
      </Typography>

      <ScrollView>
        <Typography className="font-montserrat-regular">
          Lorem ipsum dolor sit amet consectetur. Tristique elit volutpat mattis aliquam ante tortor
          euismod. Sed eu duis varius pellentesque libero fringilla ullamcorper mi lacus. In posuere
          duis amet sit ut placerat velit. Scelerisque maecenas adipiscing a commodo consequat
          ullamcorper. Vitae tellus neque a pulvinar morbi platea nulla turpis id. Sed vitae massa
          magnis natoque adipiscing non turpis. Nisi parturient quis in purus in feugiat. Nunc lorem
          eleifend eget posuere dictumst auctor habitant. Velit libero quam at tortor adipiscing.
          Est id ut ac egestas quis pellentesque lectus. Adipiscing convallis tortor vitae aenean
          sit et.
        </Typography>

        <Typography className="font-montserrat-regular">
          Lorem ipsum dolor sit amet consectetur. Tristique elit volutpat mattis aliquam ante tortor
          euismod. Sed eu duis varius pellentesque libero fringilla ullamcorper mi lacus. In posuere
          duis amet sit ut placerat velit. Scelerisque maecenas adipiscing a commodo consequat
          ullamcorper. Vitae tellus neque a pulvinar morbi platea nulla turpis id. Sed vitae massa
          magnis natoque adipiscing non turpis. Nisi parturient quis in purus in feugiat. Nunc lorem
          eleifend eget posuere dictumst auctor habitant. Velit libero quam at tortor adipiscing.
          Est id ut ac egestas quis pellentesque lectus. Adipiscing convallis tortor vitae aenean
          sit et.
        </Typography>

        <Typography className="font-montserrat-regular">
          Lorem ipsum dolor sit amet consectetur. Tristique elit volutpat mattis aliquam ante tortor
          euismod. Sed eu duis varius pellentesque libero fringilla ullamcorper mi lacus. In posuere
          duis amet sit ut placerat velit. Scelerisque maecenas adipiscing a commodo consequat
          ullamcorper. Vitae tellus neque a pulvinar morbi platea nulla turpis id. Sed vitae massa
          magnis natoque adipiscing non turpis. Nisi parturient quis in purus in feugiat. Nunc lorem
          eleifend eget posuere dictumst auctor habitant. Velit libero quam at tortor adipiscing.
          Est id ut ac egestas quis pellentesque lectus. Adipiscing convallis tortor vitae aenean
          sit et.
        </Typography>
      </ScrollView>
    </ProfileScreenWrapper>
  );
};

export default About;
