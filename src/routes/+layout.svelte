<script lang='ts'>
    import Navbar from './Navbar.svelte'
</script>

<Navbar />
<slot />

<style>
    :root {
        --mainColor: #363a41;
        --textColor: #ffffff;
        --inputColor: #4f5662;
        --accentColor: #00904b;
    }

    :global(html) {
        background-color: #26292f;
    }
</style>