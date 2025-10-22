"use client";

import { Card } from "primereact/card";
import { motion } from "framer-motion";
import { ExclamationTriangleIcon } from "primereact/icons/exclamationtriangle";
import Image from "next/image";

export default function MaintenancePage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 p-4 transition-all">
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="shadow-2xl p-8 sm:p-12 text-center max-w-lg w-full rounded-3xl border border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl transition-all">
          <div className="flex flex-col items-center gap-6">
            {/* Icon có animation nhẹ */}
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "easeInOut",
              }}
              className="flex items-center justify-center w-20 h-20 rounded-full bg-red-100 dark:bg-red-900/30 shadow-inner"
            >
              <ExclamationTriangleIcon className="text-5xl text-red-600 dark:text-red-400" />
            </motion.div>

            {/* Tiêu đề và nội dung */}
            <h1 className="text-3xl font-extrabold text-gray-900 tracking-tight">
              Thông Báo Gián Đoạn Dịch Vụ Khẩn Cấp
            </h1>

            <p className="text-base text-gray-700 leading-relaxed">
              Kính thưa Quý khách, do ảnh hưởng nghiêm trọng từ tình hình bão
              lũ, hệ thống của chúng tôi buộc phải tạm ngưng hoạt động để đảm
              bảo an toàn dữ liệu và khắc phục sự cố.
            </p>

            <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
              Đội ngũ kỹ thuật đang nỗ lực tối đa để khôi phục dịch vụ. Chúng
              tôi xin chân thành cáo lỗi và mong nhận được sự thông cảm của Quý
              khách cho sự bất tiện ngoài ý muốn này.
            </p>

            {/* Thương hiệu CHOTNHANH>VN */}
            <div className="pt-4 border-t border-gray-300 dark:border-gray-700 w-full flex flex-col items-center gap-2">
              {/* Logo nếu có */}
              <Image
                src="/chotnhanh-logo.webp" // 👉 Thay bằng đường dẫn logo thật của bạn
                alt="CHOTNHANH.VN"
                width={100}
                height={32}
                className="opacity-90 dark:opacity-100"
              />
              <p className="text-sm text-gray-600 dark:text-gray-400 italic">
                Chúng tôi là đội ngũ <span className="font-semibold text-red-600 dark:text-red-400">CHOTNHANH.VN</span> — luôn sẵn sàng phục vụ Quý khách.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Footer nhẹ nhàng */}
      <div className="mt-6 text-center text-xs text-gray-500 dark:text-gray-500">
        © {new Date().getFullYear()} CHOTNHANH.VN — All rights reserved.
      </div>
    </div>
  );
}
