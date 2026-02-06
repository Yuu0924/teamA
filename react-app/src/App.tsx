function App() {
  return (
    <div>
      <h1>交通費精算システム</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* 左側：清算期間 */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <span>清算期間</span>
          <input type="date" />
          <span>〜</span>
          <input type="date" />
        </div>

        {/* 右側：氏名 */}
        <label style={{ display: "flex", flexDirection: "column" }}>
          氏名
          <input type="text" />
        </label>
      </div>

      <div>合計：¥1,200</div>
      <div
        style={{
          display: "flex",
          borderTop: "3px solid #000",
          borderLeft: "3px solid #000",
          borderRight: "3px solid #000",
          borderBottom: "3px solid #000",
          padding: "8px 0",
        }}
      >
        <label>
          日付
          <input type="date" />
        </label>

        <label>
          支払先
          <select>
            <option value="ICチップ">ICチップ</option>
            <option value="切符">切符</option>
          </select>
        </label>

        <label>
          乗車駅
          <input type="text" />
        </label>

        <label>
          降車駅
          <input type="text" />
        </label>

        <label>
          金額
          <input type="number" />
        </label>

        <label>
          乗車区分
          <select>
            <option value="往復">往復</option>
            <option value="片道">片道</option>
          </select>
        </label>

        <div>合計：¥1,200</div>

        <label>
          備考
          <input type="text" />
        </label>

        <button>削除</button>

      </div>
      <button>追加</button>
    </div>
  )
}

export default App
