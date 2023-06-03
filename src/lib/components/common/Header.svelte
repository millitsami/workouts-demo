<script lang="ts">
    import avatar from "../../images/example_avatar.jpg";
    import menu from "../../images/menu.svg";
</script>

<header class="flex flex-col bg-indigo p-4 -mb-32 h-72">
  <div class="relative flex h-16 items-center justify-between">
    <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray" aria-expanded="false">
      <img src={menu} alt="menu" />
    </button>
    <button type="button" class="flex rounded-full" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
      <img class="inline-block h-8 w-8 rounded-full ring-2 ring-white" src={avatar} alt="avatar" />
    </button>
  </div>
  <h1 class="text-white text-3xl ml-2 py-2 font-semibold">Welcome, <br/> James!</h1>
</header>