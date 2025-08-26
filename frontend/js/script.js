// 用户中心与登录弹窗逻辑
(function () {
  const btnUser = document.getElementById("btnUserCenter");
  const modal = document.getElementById("loginModal");
  const form = document.getElementById("loginForm");

  function openModal() {
    modal?.setAttribute("aria-hidden", "false");
    // 聚焦用户名输入
    const userInput = document.getElementById("username");
    setTimeout(() => userInput && userInput.focus(), 0);
  }

  function closeModal() {
    modal?.setAttribute("aria-hidden", "true");
  }

  // 打开
  btnUser?.addEventListener("click", () => {
    const hidden = modal?.getAttribute("aria-hidden");
    if (hidden !== "false") openModal();
  });

  // 关闭（点击 × 或遮罩）
  modal?.addEventListener("click", (e) => {
    const target = e.target;
    if (target instanceof HTMLElement && target.dataset.close === "true") {
      closeModal();
    }
  });

  // 提交：简单演示——阻止默认提交，关闭弹窗，并更新按钮状态为已登录
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    const username = /** @type {HTMLInputElement|null} */ (
      document.getElementById("username")
    )?.value?.trim();
    const password = /** @type {HTMLInputElement|null} */ (
      document.getElementById("password")
    )?.value;

    // 可在此处加入实际校验/请求
    if (!username || !password) {
      alert("请输入用户名和密码");
      return;
    }

    // 简单标记登录成功
    const btn = document.getElementById("btnUserCenter");
    if (btn) btn.textContent = `用户中心（已登录：${username}）`;

    closeModal();
  });
})();
