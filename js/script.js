// JS for message simulator

  document.addEventListener("DOMContentLoaded", () => 
  {
      const toast = document.getElementById("loginToast");
      if (!toast) return;

      requestAnimationFrame(() => toast.classList.add("is-visible"));
      setTimeout(() => 
      {
          toast.classList.remove("is-visible");
          setTimeout(() => toast.remove(), 300);
      },  5000);
  });

// JS for sign out modal

  document.addEventListener("DOMContentLoaded", () => 
  {
      const toast = document.getElementById("loginToast");
      if (toast) 
      {
          requestAnimationFrame(() => toast.classList.add("is-visible"));
          setTimeout(() => 
          {
              toast.classList.remove("is-visible");
              setTimeout(() => toast.remove(), 300);
          },  5000);
      }

      const signOutLink = document.querySelector(".sign-out");
      const modal = document.getElementById("signOutModal");
      const cancelBtn = document.getElementById("cancelSignOut");
      const confirmBtn = document.getElementById("confirmSignOut");
      if (!signOutLink || !modal || !cancelBtn || !confirmBtn) return;

      const openModal = (e) => 
      {
          e.preventDefault();
          modal.hidden = false;
          requestAnimationFrame(() => modal.classList.add("is-visible"));
          cancelBtn.focus();
      };

      const closeModal = () => 
      {
          modal.classList.remove("is-visible");
          setTimeout(() => { modal.hidden = true; }, 200);
          signOutLink.focus();
      };

      signOutLink.addEventListener("click", openModal);
      cancelBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => 
      {
          if (e.target === modal) closeModal();
      });
      document.addEventListener("keydown", (e) => 
      {
          if (e.key === "Escape" && !modal.hidden) closeModal();
      });
      confirmBtn.addEventListener("click", () => 
      {
          window.location.href = signOutLink.getAttribute("href");
      });
  });

// JS for running payroll
  
  document.addEventListener("DOMContentLoaded", () => 
  {
      const openBtn = document.getElementById("openConfirmRun");
      const modal = document.getElementById("confirmRunModal");
      const cancelBtn = document.getElementById("cancelConfirmRun");
      const proceedBtn = document.getElementById("proceedConfirmRun");
      if (!openBtn || !modal || !cancelBtn || !proceedBtn) return;

      const openModal = () => 
      {
          modal.hidden = false;
          requestAnimationFrame(() => modal.classList.add("is-visible"));
          cancelBtn.focus();
      };

      const closeModal = () => 
      {
          modal.classList.remove("is-visible");
          setTimeout(() => { modal.hidden = true; }, 200);
          openBtn.focus();
      };

      openBtn.addEventListener("click", openModal);
      cancelBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => 
      {
          if (e.target === modal) closeModal();
      });

      document.addEventListener("keydown", (e) => 
      {
          if (e.key === "Escape" && !modal.hidden) closeModal();
      });

      proceedBtn.addEventListener("click", () => 
      {
          proceedBtn.textContent = "Generating . . .";
          proceedBtn.disabled = true;
      });
  });

// JS for pay structure
  
  document.addEventListener("DOMContentLoaded", () => 
  {
      const openBtn = document.getElementById("openAddGrade");
      const modal = document.getElementById("addGradeModal");
      const cancelBtn = document.getElementById("cancelAddGrade");
      const saveBtn = document.getElementById("saveAddGrade");
      if (!openBtn || !modal || !cancelBtn || !saveBtn) return;

      const openModal = () => 
      {
          modal.hidden = false;
          requestAnimationFrame(() => modal.classList.add("is-visible"));
          document.getElementById("gradeName").focus();
      };

      const closeModal = () => 
      {
          modal.classList.remove("is-visible");
          setTimeout(() => { modal.hidden = true; }, 200);
          openBtn.focus();
      };

      openBtn.addEventListener("click", openModal);
      cancelBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => 
      {
          if (e.target === modal) closeModal();
      });

      document.addEventListener("keydown", (e) => 
      {
          if (e.key === "Escape" && !modal.hidden) closeModal();
      });

      saveBtn.addEventListener('click', closeModal);
  });

// JS for users and roles page

  document.addEventListener("DOMContentLoaded", () => 
  {
      const openBtn = document.getElementById("openInviteUser");
      const modal = document.getElementById("inviteUserModal");
      const cancelBtn = document.getElementById("cancelInviteUser");
      const sendBtn = document.getElementById("sendInviteUser");
      if (!openBtn || !modal || !cancelBtn || !sendBtn) return;

      const openModal = () => 
      {
          modal.hidden = false;
          requestAnimationFrame(() => modal.classList.add("is-visible"));
          document.getElementById("inviteEmail").focus();
      };

      const closeModal = () => 
      {
          modal.classList.remove("is-visible");
          setTimeout(() => { modal.hidden = true; }, 200);
          openBtn.focus();
      };

      openBtn.addEventListener("click", openModal);
      cancelBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => 
      {
          if (e.target === modal) closeModal();
      });

      document.addEventListener("keydown", (e) => 
      {
          if (e.key === "Escape" && !modal.hidden) closeModal();
      });

      sendBtn.addEventListener("click", closeModal);
  });

// JS for departments page

  document.addEventListener("DOMContentLoaded", () => 
  {
      const openBtn = document.getElementById("openAddDept");
      const modal = document.getElementById("addDeptModal");
      const cancelBtn = document.getElementById("cancelAddDept");
      const saveBtn = document.getElementById("saveAddDept");
      if (!openBtn || !modal || !cancelBtn || !saveBtn) return;

      const openModal = () => 
      {
          modal.hidden = false;
          requestAnimationFrame(() => modal.classList.add("is-visible"));
          document.getElementById("deptName").focus();
      };

      const closeModal = () => 
      {
          modal.classList.remove("is-visible");
          setTimeout(() => { modal.hidden = true; }, 200);
          openBtn.focus();
      };

      openBtn.addEventListener("click", openModal);
      cancelBtn.addEventListener("click", closeModal);
      modal.addEventListener("click", (e) => 
      {
          if (e.target === modal) closeModal();
      });

      document.addEventListener("keydown", (e) => 
      {
          if (e.key === "Escape" && !modal.hidden) closeModal();
      });

      saveBtn.addEventListener("click", closeModal);
  });