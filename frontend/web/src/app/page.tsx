import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import page from "./page.module.scss"


function sampleData(
  date: number,
  weekDay: string,
  schedule: string,
  bikou: string,

) {
  return { date, weekDay, schedule, bikou };
}

const rows = [
  sampleData(1, "月", "市庁舎（産）・クリーンセンター・ハリマビステム・横浜寺尾フラット・松見町2丁目東部・一心事務所・一心新羽・お祭り22時・千葉パッカー１台（２名）・釜利谷ｐｍ", ""),
  sampleData(2, "火", "市庁舎（産）・アルス・ライオンズ・ヒルズ・センチュリーマンション・新橋ｐｍ・トップ事務所・ ＦＩＮ（クロス）", ""),
  sampleData(3, "水", "市庁舎（産）・市庁舎（紙）・クリーンセンター・白幡南町・船橋２ｔ２名・お祭りAM６時・一心青葉15時３０・中央区２tパッカー車1台・東横化学（1台14時～15時）", ""),
  sampleData(4, "木", "市庁舎（産）・大田区上池台産廃9時半・新置き場立会検査14時・三洋薬品・西蒲田14:00", "32-07車検"),
  sampleData(5, "金", "市庁舎（産）・神北・家電・ホンダカーズ鶴見13-15・西寺尾見積り16時 ", ""),
  sampleData(6, "土", "市庁舎（産）ハリマビステム・トライアークス旭区Am４名～", ""),
  sampleData(7, "日", "市庁舎（産）・市庁舎（紙）・クリーンセンター・白幡南町・船橋２ｔ２名・お祭りAM６時・一心青葉15時３０・中央区２tパッカー車1台・東横化学（1台14時～15時）", ""),
  sampleData(8, "月", "市庁舎（産）・ハリマビステム・ふたば会・一心・松見町見積もり11～13・一心足立区・国土交通省14：00", ""),
  sampleData(9, "火", "市庁舎（産）・アルス・ライオンズ・ライオンズ反町・労務委員会19：00・家電pc・日本フネン(杉並区午前）", "集団回収代表者会議18：30圭"),
  sampleData(10, "水", "市庁舎（産）・市庁舎（紙）・クリーンセンター・白幡向町・白幡南町・シャンボール・菅田ハイツ", ""),
  sampleData(11, "木", "市庁舎（産）・西菅田・トップ青葉・お中元買い出し・置き場16時打ち合わせ", ""),
  sampleData(12, "金", "市庁舎（産）・東寺尾第一・家電・大田区上池台産廃PM・動物病院AM", ""),
  sampleData(13, "土", "市庁舎（産）・ハリマビステム・サザンヒルズ ", ""),
  sampleData(14, "日", "", ""),
  sampleData(15, "月", "祝日　横浜寺尾フラット・松見町2丁目東部・上瀬谷片ずけ", ""),
  sampleData(16, "火", "市庁舎（産）・アルス・ライオンズ・ヒルズ・一心事務所・仮設トイレ(置き場午前中設置）", ""),
  sampleData(17, "水", "市庁舎（産）・市庁舎（紙）・クリーンセンター・白幡南町・日本フネン（杉並区15時）", ""),
  sampleData(18, "木", "市庁舎（産）", ""),
  sampleData(19, "金", "市庁舎（産）・神北・家電", ""),
  sampleData(20, "土", "市庁舎（産）・ハリマビステム・妙蓮寺・陽輪台・シーアイ・リバーサイド・看板取り付け", ""),
  sampleData(21, "日", "・看板取り付け", ""),
  sampleData(22, "月", "市庁舎（産）・ハリマビステム・ふたば会・一心", ""),
  sampleData(23, "火", "市庁舎（産）・アルス・ライオンズ・ライオンズ反町", ""),
  sampleData(24, "水", "市庁舎（産）・市庁舎（紙）・クリーンセンター・白幡向町・白幡南町・菅田ハイツ", ""),
  sampleData(25, "木", "市庁舎（産）・西菅田", ""),
  sampleData(26, "金", "市庁舎（産）・東寺尾第一・東寺尾南部・家電", ""),
  sampleData(27, "土", "市庁舎（産）・ハリマビステム・サザンヒルズ", ""),
  sampleData(28, "日", "", ""),
  sampleData(29, "月", "市庁舎（産）・ハリマビステム・クリーンセンター", ""),
  sampleData(30, "火", "市庁舎（産）・アルス・ライオンズ・藤和大口コープ", ""),
  sampleData(31, "水", "市庁舎（産）・市庁舎（紙）・クリーンセンター・白幡南町", ""),
];

export default function Home() {
  return (
    <>
      <h2>2024年　月間スケジュール</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="center" colSpan={2} className={`${page.tableCell} ${page.tablePadding}`}>7月</TableCell>
              <TableCell align="center" className={`${page.tableCell} ${page.tablePadding}`}>社用／予定</TableCell>
              <TableCell align="center" className={`${page.tableCell} ${page.tablePadding}`}>休み／備考</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.date}
                className={
                  row.weekDay === "土" ? page.saturday :
                    row.weekDay === "日" ? page.sunday :
                      ''
                }
              >
                <TableCell align="center" component="th" scope="row" className={`${page.tableCell} ${page.tablePadding}  ${row.weekDay === '土' ? page.blueColor : ''} ${row.weekDay === '日' ? page.redColor : ''}`}>{row.date} </TableCell>
                <TableCell align="center" className={`${page.tableCell} ${page.tablePadding} ${row.weekDay === '土' ? page.blueColor : ''} ${row.weekDay === '日' ? page.redColor : ''}`}>{row.weekDay} </TableCell>
                <TableCell align="left" className={`${page.tableCell} ${page.tablePadding} `}>{row.schedule}</TableCell>
                <TableCell align="left" className={`${page.tableCell} ${page.tablePadding}`}>{row.bikou}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
