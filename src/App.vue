<template>
    <div>
        <Nav/>
        <GearTable/>
    </div>
</template>

<script>
import Nav from "./components/Nav.vue";
import GearTable from "./components/GearTable.vue";

export default {
    components: {
        Nav,
        GearTable
    }
};
</script>