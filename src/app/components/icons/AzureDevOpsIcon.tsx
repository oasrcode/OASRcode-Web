import { IconProps } from "@/app/interface/IconProps";

export default function AzureDevOpsIcon({ width, height }: IconProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
      <path
        fill="url(#azure-devops-color-16__paint0_linear_707_116)"
        d="M15 3.622v8.512L11.5 15l-5.425-1.975v1.958L3.004 10.97l8.951.7V4.005L15 3.622zm-2.984.428L6.994 1v2.001L2.382 4.356 1 6.13v4.029l1.978.873V5.869l9.038-1.818z"
      />
      <defs>
        <linearGradient id="azure-devops-color-16__paint0_linear_707_116" x1="8" x2="8" y1="14.956" y2="1.026" gradientUnits="userSpaceOnUse">
          <stop stop-color="#0078D4" />
          <stop offset=".16" stop-color="#1380DA" />
          <stop offset=".53" stop-color="#3C91E5" />
          <stop offset=".82" stop-color="#559CEC" />
          <stop offset="1" stop-color="#5EA0EF" />
        </linearGradient>
      </defs>
    </svg>
  );
}
