<script>
  import SearchInputField from '$lib/data/ProductSearchItems.json';

  let searchInput = '';
  let showList = false;
  let isHovered = false;
  
  function filterItems() {
    const filtered = SearchInputField.filter((item) =>
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    ).sort((a, b) => a.name.localeCompare(b.name));
    return searchInput.trim() !== '' ? filtered : [];
  }
</script>

<main>
  <div class="search-container">
    <input
      bind:value={searchInput}
      placeholder="Produkte suchen ... "
      on:focus={() => (showList = true)}
      on:blur={() => (showList = false)}
      style="padding-left: 15px;
            top: 2px;
            width: calc(100% - 30px);
            color: #606060;
            font-family: FiraGO;
            font-size: 0.9rem;
            font-style: normal;
            font-weight: 400;
            line-height: normal;"
    />
    <div class="search-icon">
      <button
        class="search-button"
        on:mouseover={() => (isHovered = true)}
        on:mouseout={() => (isHovered = false)}
        on:focus={() => (isHovered = true)}
        on:blur={() => (isHovered = false)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M11.4018 11.4119L15 15M9.81285 1.78581C12.6226 3.40349 13.5853 6.98625 11.9631 9.78814C10.3409 12.59 6.74804 13.55 3.93827 11.9324C1.1285 10.3147 0.165805 6.73192 1.78802 3.93003C3.41024 1.12814 7.00308 0.168144 9.81285 1.78581Z"
            stroke="url(#paint0_linear_1399_11250)"
            stroke-width="2"
            stroke-linecap="round"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1399_11250"
              x1="0.999999"
              y1="8.05833"
              x2="8.73883"
              y2="15.0241"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#E4E4E4" />
              <stop offset="1" stop-color="#ffffff" />
            </linearGradient>
          </defs>
        </svg>
      </button>
    </div>
  </div>

  {#if showList && filterItems().length > 0}
    <ul class="listOptions">
      {#each filterItems() as filteredItem (filteredItem.id)}
        <li>
          <a href="#">
            {#if filteredItem.name}
              {filteredItem.name}
            {/if}
            {#if filteredItem.sku}
              ({filteredItem.sku})
            {/if}
          </a>
        </li>
      {/each}
    </ul>
  {/if}
</main>

<style>
  input {
    border: none;
    outline: none;
    width: 22rem;
    height: 2.4rem;
    flex-shrink: 0;
    border-radius: 1.875rem 0 0 1.875rem;
    background: #fff;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.25) inset;
  }

  .listOptions {
    width: 100%;
    box-sizing: content-box;
    list-style: none;
    position: absolute;
    width: 21.5rem;
    max-height: 300px;
    overflow-y: scroll; /* Always show scrollbar */
    background: #fff;
    border-radius: 0.475rem;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-top: 0.5em;
  }

  .listOptions li {
    padding: 0.345em 1em 0.345em 1em;
    width: calc(100% - 30px);
    color: #606060;
    font-family: FiraGO;
    font-size: 0.9rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
  .listOptions li:hover {
    background-color: aliceblue;
  }

  .listOptions li a {
    text-decoration: none;
    color: #333;
  }

  .search-container {
    position: relative;
    display: flex;
    align-items: center;
    width: 24rem;
  }

  .search-button {
    border: none;
    outline: none;
    width: 2.25rem;
    height: 2.57rem;
    flex-shrink: 0;
    border-radius: 0rem 2.475rem 2.475rem 0rem;
    background: var(--color-theme-2);
    transition: opacity 0.3s ease-in-out;
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
  }

  .search-button:hover {
    box-shadow: 0px 0px 14px 0px rgba(0, 133, 255, 0.2);
    transition: opacity 0.3s ease-in-out;
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
  }

  .search-icon {
    position: absolute;
    top: 50%;
    right: -23px; /* Abstand nach Bedarf anpassen*/
    transform: translateY(-50%);
    cursor: pointer;
  }

  ul {
    width: 100%;
    box-sizing: content-box;
  }

  @media only screen and (max-width: 992px) {
    .search-container {
      width: 22rem;
    }
    .listOptions {
      width: 20rem;
    }
  }

  @media only screen and (max-width: 768px) {
    .search-container {
      width: 20rem;
    }
    .listOptions {
      width: 18.3rem;
    }
  }
</style>
