import React from "react";

import { ProfileLink } from "@/shared/components/screens/profile/ProfileLink";
import { ProfileScreenWrapper } from "@/shared/components/screens/profile/ProfileScreenWrapper";
import { Button } from "@/shared/components/ui/Button";
import { ROUTES } from "@/shared/constants/routes";
import { useAuth } from "@/shared/hooks/useAuth";

const Index = () => {
  const { loading, signOut } = useAuth();

  return (
    <ProfileScreenWrapper>
      <ProfileLink href={ROUTES.SETTINGS} icon="settings" text="Settings" />
      <ProfileLink href={ROUTES.ABOUT} icon="info" text="About app" />
      <ProfileLink href={ROUTES.POLICY} icon="shield" text="Privacy Policy" withoutBorder />

      {/*<SharedCard />*/}

      <Button className="mt-auto" disabled={loading} onPress={signOut} variant="ghost">
        {loading ? "Loading..." : "Log out"}
      </Button>
    </ProfileScreenWrapper>
  );
};

export default Index;
