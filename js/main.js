const embedOptions = {
    actions: false,
    renderer: "svg"
};

const charts = [
    { id: "#vis-s1-c1", spec: "map_json/s1_c1_macro_trajectory.vl.json", name: "Chart 01" },
    { id: "#vis-s1-c2", spec: "map_json/s1_c2_essentials_vs_luxuries.vl.json", name: "Chart 02" },
    { id: "#vis-s2-m1", spec: "map_json/s2_m1_state_spending_choropleth.vl.json", name: "Chart 03" },
    { id: "#vis-s2-m2", spec: "map_json/s2_m2_capital_cpi_spikes.vl.json", name: "Chart 04" },
    { id: "#vis-s2-m3", spec: "map_json/s2_m3_migration_flow.vl.json", name: "Chart 05" }, // Added Chart 05 target
    { id: "#vis-s3-c6", spec: "map_json/s3_c6_category_bump_ranks.vl.json", name: "Chart 06" },
    { id: "#vis-s3-c7", spec: "map_json/s3_c7_inflation_heatmap.vl.json", name: "Chart 07" },
    { id: "#vis-s3-c8", spec: "map_json/s3_c8_category_dumbbell.vl.json", name: "Chart 08" },
    { id: "#vis-s3-c9", spec: "map_json/s3_c9_spending_streamgraph.vl.json", name: "Chart 09" },
    { id: "#vis-s4-c10", spec: "map_json/s4_c10_slci_demographics.vl.json", name: "Chart 10" }, // Added Chart 10 target
    { id: "#vis-s4-c11", spec: "map_json/s4_c11_category_volatility.vl.json", name: "Chart 11" }  // Added Chart 11 target
];

document.addEventListener("DOMContentLoaded", () => {
    charts.forEach(({ id, spec, name }) => {
        const container = document.querySelector(id);
        if (!container) return;

        vegaEmbed(id, spec, embedOptions)
            .then(() => {
                console.log(`${name} rendered successfully!`);
            })
            .catch((err) => {
                console.error(`Error loading ${name}:`, err);
                container.innerHTML = `
                    <div style="color: #DC2626; background: #FEF2F2; border: 1px solid #FCA5A5; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 0.8rem;">
                        <strong>${name} Load Error:</strong> ${err.message}
                    </div>
                `;
            });
    });
});