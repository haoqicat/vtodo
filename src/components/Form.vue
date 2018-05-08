<template>
  <div class="wrap">
    <input />
    <button>
      <svg width="44px" height="44px" viewBox="0 0 44 44" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
        <!-- Generator: Sketch 41.1 (35376) - http://www.bohemiancoding.com/sketch -->
        <title>Capa_1</title>
        <desc>Created with Sketch.</desc>
        <defs></defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g id="Desktop" transform="translate(-652.000000, -660.000000)" fill="#FFFFFF">
                <g id="add-button" transform="translate(632.000000, 640.000000)">
                    <g id="add" transform="translate(20.274809, 20.274809)">
                        <g id="Capa_1">
                            <path d="M40.7342293,18.5308356 L24.5407866,18.5308356 L24.5407866,2.33730534 C24.5407866,1.59962372 23.5390843,8.75690437e-05 21.5357673,8.75690437e-05 C19.5324503,8.75690437e-05 18.530748,1.59971129 18.530748,2.33730534 L18.530748,18.5309232 L2.33721777,18.5309232 C1.59962372,18.5308356 0,19.5325379 0,21.5357673 C0,23.5389968 1.59962372,24.5407866 2.33721777,24.5407866 L18.5308356,24.5407866 L18.5308356,40.7344045 C18.5308356,41.4719109 19.5324503,43.0716222 21.5358549,43.0716222 C23.5392595,43.0716222 24.5408742,41.4719109 24.5408742,40.7344045 L24.5408742,24.5407866 L40.734492,24.5407866 C41.4719985,24.5407866 43.0717098,23.5391719 43.0717098,21.5357673 C43.0717098,19.5323628 41.4718234,18.5308356 40.7342293,18.5308356 Z" id="Shape"></path>
                        </g>
                    </g>
                </g>
            </g>
        </g>
    </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Form'
}
</script>

<style scoped lang="scss">
@import '@/styles/variables.scss';

.wrap {
  margin-bottom: 10px;
  margin-right: 30px;
  display: flex;
  input {
    line-height: 25px;
    font-size: 17px;
    flex-grow: 1;
    padding-left: 5px;
    border: 1px solid $accent-blue;
    &:focus {
      outline: none;
    }
  }
  button {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: 0;
    background-color: $accent-dark;
    color: white;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.7);
    transform: scale(2);
    &:focus {
      outline: none;
    }
    &:hover {
      cursor: pointer;
    }
    svg {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
