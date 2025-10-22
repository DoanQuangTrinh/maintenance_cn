"use client";

import { Card } from "primereact/card";
import { ProgressSpinner } from "primereact/progressspinner";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MaintenancePage() {
  const router = useRouter();
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 transition-all">
      <Card className="shadow-2xl p-8 text-center max-w-md w-full rounded-2xl">
        <div className="flex flex-col items-center gap-6">
          <ProgressSpinner style={{ width: "60px", height: "60px" }} />
          <h1 className="text-3xl font-bold text-dark">
            Trang web đang bảo trì 🚧
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-sm">
            Chúng tôi đang thực hiện nâng cấp hệ thống để mang lại trải nghiệm tốt hơn.
          </p>
          <p className="text-gray-500 text-xs">
            Vui lòng quay lại sau
          </p>

        </div>
      </Card>
    </div>
  );
}
