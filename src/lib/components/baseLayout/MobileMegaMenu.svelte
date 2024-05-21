<script lang="ts">
  import cissLogo from '$lib/images/Logo_CISS-TDI.svg';
  import BurgerMenuButton from '$lib/components/buttons/BurgerMenuButton.svelte';
  import type { Link } from '$lib/types';
  import ArrowRight from '$lib/images/icons_interface/linear/arrow-right.svg';

  export let links: Link[];

  let openedDropdown: Link | null = null;

  function toggleDropdown(link: Link) {
    if (openedDropdown === link) {
      openedDropdown = null;
    } else {
      openedDropdown = link;
    }
  }
</script>

<div class="container-main">
    
  <div class="container-h1-mobile-menu">
    <p class="h1-mobile-menu">Produkte und Dienstleistungen von CISS-Shop</p>
  </div>
  <nav>
    <ul class="vertical-menu">
      {#each links as link (link.id)}
        <li class="menu-item">
          <div class="container-main-category">
            <a href="/" on:click={() => toggleDropdown(link)}>
              {link.label}
            </a>
            <div class="button-menu-arrow">
              <img src={ArrowRight} alt="Navigationspfeil zum Produktüberblick des GeoShops" />
            </div>
          </div>
          {#if openedDropdown === link && link.subMenu}
            <div class="dropdown">
              <ul class="submenu">
                {#each link.subMenu as subLink (subLink.id)}
                  <li class="submenu-item">
                    <div class="submenu-item-content">
                      <img
                        src={subLink.image}
                        alt={subLink.label}
                        style="width: 10rem; height: auto; border-radius: 0.625rem; display: none;"
                      />
                      <a href={`/${link.label.toLowerCase()}/${subLink.label.toLowerCase()}`}>
                        {subLink.label}
                      </a>
                    </div>
                    {#if subLink.subList && subLink.subList.length > 0}
                      <div class="sub-dropdown">
                        <ul class="sub-submenu column">
                          {#each subLink.subList as subSubMenu (subSubMenu)}
                            <li class="sub-submenu-item">
                              <a
                                href={`/${link.label.toLowerCase()}/${subLink.label.toLowerCase()}/${subSubMenu.toLowerCase()}`}
                              >
                                {subSubMenu}
                              </a>
                            </li>
                          {/each}
                        </ul>
                      </div>
                    {/if}
                  </li>
                {/each}
              </ul>
            </div>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
</div>

<style>
  .container-main {
    position: fixed;
    height: 100vh;
    width: 50vw;
    background: #ffffff;
    padding-top: 5em;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.25);
  }

  .container-h1-mobile-menu {
    background-color: aliceblue;
    padding: 0.6em 2em;
  }
  nav {
    height: 70vh;
    overflow-y: scroll;
  }

  .h1-mobile-menu {
    color: var(--icons-darkbluegray-icon, #252c33);
    font-family: FiraGO;
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 1.625rem; /* 144.444% */
  }

  /* Add your vertical menu styles here */
  .vertical-menu {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    width: 50vw;
  }

  .container-main-category {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .menu-item {
    position: relative;
    padding: 0.8em 2em;
    color: #1a1a1a;
    margin: 0;
    border: 1px solid #f5f4f4;
  }
  .container-main-category{
    display: flex;
    align-items: center;
    margin: 0;
  }

  .button-menu-arrow {
    width: 2rem;
    height: 2rem;
    box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.1);
    transition: all 0.4s ease;
    border-radius: 0.2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button-menu-arrow:hover {
    box-shadow: 0px 0px 6px 0px rgba(91, 134, 172, 0.8);
    transition: all 0.4s ease;
  }

  .button-menu-arrow:active {
    box-shadow: 0px 0px 8px 0px rgba(91, 134, 172, 1.4);
    transition: all 0.2s ease;
  }

  .dropdown {
    display: block;
    list-style-type: none;
    position: relative;
    top: 0.8em;
    left: -2em;
    z-index: 1;
    padding-top: 1em;
    background-color: #fff;
    width: 50vw;
  }

  ul,
  li {
    list-style-type: none;
  }

  .submenu-item-content {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .submenu-item-content a {
    font-family: FiraGO;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem;
    color: #000;
  }

  .sub-dropdown {
    display: flex;
    flex-direction: column;
    left: 0;
  }

  .sub-submenu-item {
    font-family: FiraGO;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.625rem;
    color: #000;
  }

  @media only screen and (max-width: 768px) {
    .container-main{
    width: 80vw;
  }

  .dropdown{
    width: 80vw;
  }

  .vertical-menu{
    width: 80vw;
  }
  }
</style>
