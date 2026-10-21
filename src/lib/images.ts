import iot from "@/assets/u/iot.jpg";
import analytics from "@/assets/u/analytics.jpg";
import cloud from "@/assets/u/cloud.jpg";
import ai from "@/assets/u/ai.jpg";
import security from "@/assets/u/security.jpg";
import developer from "@/assets/u/developer.jpg";
import webdesign from "@/assets/u/webdesign.jpg";
import mobile from "@/assets/u/mobile.jpg";
import itSupport from "@/assets/it-support.jpg";
import teamStrategy from "@/assets/team-strategy.jpg";
import ecommerce from "@/assets/ecommerce-app.jpg";

export const img = {
  iot,
  analytics,
  cloud,
  ai,
  security,
  developer,
  webdesign,
  mobile,
  itSupport,
  teamStrategy,
  ecommerce,
};

/** Image shown on each service page, matched to the work it describes. */
export const serviceImages: Record<string, string> = {
  "/custom-software-development": img.developer,
  "/web-application-development": img.webdesign,
  "/mobile-app-development": img.mobile,
  "/digital-marketing": img.analytics,
  "/software-testing-qa": img.developer,
  "/software-maintenance-support": img.itSupport,
  "/legacy-software-modernization": img.cloud,
  "/ui-design": img.webdesign,
  "/database-development-management": img.cloud,
  "/devops": img.cloud,
  "/technology-consulting": img.teamStrategy,
  "/dedicated-development-teams": img.teamStrategy,
  "/offshore-nearshore-outsourcing": img.teamStrategy,
  "/project-management": img.teamStrategy,
  "/documentation-training": img.mobile,
  "/support": img.itSupport,
  "/cost-effective-solutions": img.analytics,
};
