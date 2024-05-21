<script lang="ts">
  import { menuData } from '$lib/data/menuData';

  let openMenu: string | null = null;

  function open(menuId: string) {
      openMenu = menuId;
  }

  function close() {
      openMenu = null;
  }
</script>

<div class="menu-container bg-slate-100 w-full dark:bg-gray-700">
  {#each menuData.categories as category}
      <button on:mouseenter={() => open(category.id)} class="menu-toggle mx-8 my-3 text-gray-500 dark:text-gray-400 hover:text-gray-900 font-bold">{category.name}</button>
  {/each}

  <div class="mega-menu mx-8" role="menu" on:mouseleave={close} tabindex="0">
      {#each menuData.categories as category}
          {#if openMenu === category.id}
              <div class="menu-section" on:mouseenter={() => open(category.id)} role="menuitem" tabindex="0">
                  {#each category.items as item}
                      <div class="menu-category mt-8">
                          <img src={item.image} alt={item.alt}>
                          <h3 class="my-3 mt-5 text-lg font-bold text-gray-500 hover:text-gray-900 dark:text-gray-300">{item.title}</h3>
                          <ul class="my-3 mb-8 ">
                              {#each item.links as link}
                                  <li class="my-1 dark:text-gray-400 text-gray-500 hover:text-gray-900"><a href={link.url}>{link.name}</a></li>
                              {/each}
                          </ul>
                      </div>
                  {/each}
              </div>
          {/if}
      {/each}
  </div>
</div>

<style>
  .menu-section {
    display: flex;
    flex-direction: row;
    gap: 6em;
  }

  .menu-container {
    position: absolute;
    z-index: 100000;
    width: 100%;
    margin: 0 auto;
    gap: 6em;
  }
</style>
