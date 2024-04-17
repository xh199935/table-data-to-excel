const XlsxPopulate = require("xlsx-populate");

const data = require("./data2.json");

// 打开 Excel 文件并写入数据
XlsxPopulate.fromFileAsync("数据字典.xlsx")
  .then((workbook) => {
    const sheet = workbook.sheet("返回码");

    // 将数据逐行写入 Excel 表格
    data.forEach((item, index) => {
      const rowIndex = index + 2; // 从第二行开始写入数据
      sheet.cell(`A${rowIndex}`).value(item.dictCode);
      sheet.cell(`B${rowIndex}`).value(item.dictSort);
      sheet.cell(`C${rowIndex}`).value(item.dictLabel);
      sheet.cell(`D${rowIndex}`).value(item.dictValue);
      sheet.cell(`E${rowIndex}`).value(item.dictType);
      sheet.cell(`F${rowIndex}`).value("否");
      sheet.cell(`G${rowIndex}`).value("正常");
    });

    // 保存并关闭 Excel 文件
    return workbook.toFileAsync("数据字典.xlsx");
  })
  .then(() => {
    console.log("数据已成功写入 Excel 文件。");
  })
  .catch((err) => {
    console.error("写入 Excel 文件时出错：", err);
  });
