<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';
  import type { Link } from '$lib/types';

  export let links: Link[];

  // Define the store to hold the current page information
  const currentPage = writable<{ url: { pathname: string } }>({ url: { pathname: '' } });

  let hoveredLink: Link | null = null;
  let isMouseInside = false;

  function setHoveredLink(link: Link) {
    hoveredLink = link;
  }

  function handleMouseMoveInside() {
    isMouseInside = true;
  }

  function handleMouseMoveOutside() {
    hoveredLink = null;
    isMouseInside = false;
  }

  onMount(() => {
    // Reset hoveredLink when leaving the menu
    document.addEventListener('mouseleave', () => {
      hoveredLink = null;
      isMouseInside = false;
    });

    // Update the current page information when the component mounts
    currentPage.update((value) => ({ ...value, url: { pathname: window.location.pathname } }));
  });
</script>

<nav on:mousemove={handleMouseMoveInside} on:mouseleave={handleMouseMoveOutside}>
  <ul class="mega-menu">
    <!-- Assuming $page.url.pathname is used in your aria-current condition -->

    {#each links as link (link.id)}
      <li class="menu-item">
        <div class="submenu-item-content">
          <div
            class="icon-container"
            on:mouseenter={() => setHoveredLink(link)}
            role="button"
            tabindex="0"
          >
            <img src={link.image} alt={link.label} />
          </div>
          <a href="/">
            {link.label}
          </a>
        </div>
        {#if link.subLinks && link.subLinks.length > 0 && (hoveredLink === link || isMouseInside)}
          <div class="dropdown">
            <!--             <div class="triangle"></div> -->
            <ul class="submenu column">
              {#each link.subLinks as subSubMenu (subSubMenu.label)}
                <li class="sub-submenu-item">
                  <div class="submenu-item-content submenu-item-content-right">
                    <div class="icon-container" role="button">
                      <img src={subSubMenu.image} alt={subSubMenu.label} />
                    </div>
                    <div class="box-dropdown-a">
                      <a href={subSubMenu.url}>
                        {subSubMenu.label}
                      </a>
                    </div>
                  </div>
                </li>
              {/each}
            </ul>
          </div>
        {/if}
      </li>
    {/each}
  </ul>
</nav>

<style>
  .mega-menu {
    display: flex;
    justify-content: flex-end;
    list-style: none;
    padding: 0;
    margin-right: 5%;
    right: 0;
    white-space: nowrap;
  }
  .submenu-item-content {
    cursor: pointer;
  }

  .menu-item {
    text-decoration: none;
    margin: 0 1em;
    position: relative;
    font-family: var(--font-body);
    font-size: 0.9em;
    letter-spacing: 0.04em;
    font-weight: 500;
    letter-spacing: 0.01em;
    padding: 9px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: auto;
    white-space: nowrap;
  }

  .menu-item:hover .dropdown {
    display: flex;
    white-space: nowrap;
  }

  .submenu {
    list-style: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    color: var(--icons-darkbluegray-icon, #252c33);
    font-family: FiraGO;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: left;
    margin-top: 0px;
    white-space: nowrap;
  }

  .sub-submenu-item {
    padding-top: 14px;
    text-decoration: none;
    margin: 0 6px 0 6px;
    position: relative;
    font-family: var(--font-body);
    list-style: none;
    word-wrap: none;
  }

  .dropdown {
    display: none;
    position: absolute;
    top: 42px;
    right: 0;
    background-color: #fff;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.3);
    width: auto;
    z-index: 1;
    border-radius: 0.375rem 0.375rem 0.375rem 0.375rem;
    word-wrap: none;
    border-top: 12px solid rgba(143, 183, 245, 0.3);
  }
  /*   .triangle {
    position: relative;
    width: 0px;
    height: 0px;
    -webkit-transform: rotate(360deg);
    border-style: solid;
    border-width: 0 7px 12.1px 7px;
    border-color: transparent transparent #eb212e transparent;
    top: -24px;
    right: 0px;
  } */

  .dropdown .submenu {
    gap: 10px;
    padding: 20px;
    width: auto;
  }

  .submenu-item-content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    align-items: center;
    right: 0;
    width: auto;
    color: #031722;
    text-align: center;
    font-family: FiraGO;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    word-wrap: none;
  }

  .submenu-item-content:hover {
    color: var(--icons-darkbluegray-icon);
  }

  .submenu-item-content-right {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: auto;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .icon-container img {
    width: 24px;
    height: 24px;
    padding-right: 10px;
  }

  .box-dropdown-a {
    text-align: left;
    word-wrap: none;
    width: auto;
  }

  @media only screen and (max-width: 992px) {
    .dropdown {
      display: none;
    }
    .menu-item {
      margin: 0 0.1em;
    }

    .submenu-item-content a {
      display: none; /* Verberge den Text */
    }

    .menu-item:hover .dropdown {
      display: none;
    }

    .icon-container {
      display: flex; /* Zeige die Icons */
    }
  }
</style>
