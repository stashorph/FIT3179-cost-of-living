const embedOptions = {
    actions: false,
    renderer: "svg"
};

// Add all your charts to this registry
const charts = [
    {
        id: "#vis-s1-c1",
        spec: "map_json/s1_c1_macro_trajectory.vl.json",
        name: "Chart 01 (Macro Trajectory)"
    },
    {
        id: "#vis-s1-c2",
        spec: "map_json/s1_c2_essentials_vs_luxuries.vl.json",
        name: "Chart 02 (Diverging Gap)"
    },
    {
        id: "#vis-s2-m1",
        spec: "map_json/s2_m1_state_spending_choropleth.vl.json",
        name: "Chart 03 (State Choropleth)"
    },
    {
        id: "#vis-s2-m2",
        spec: "map_json/s2_m2_capital_cpi_spikes.vl.json",
        name: "Chart 04 (Capital Ring Map)"
    },
    {
        id: "#vis-s3-c6",
        spec: "map_json/s3_c6_category_bump_ranks.vl.json",
        name: "Chart 6"
    },
    {
        id: "#vis-s3-c7",
        spec: "map_json/s3_c7_inflation_heatmap.vl.json",
        name: "Chart 7"
    },
    {
        id: "#vis-s3-c8",
        spec: "map_json/s3_c8_category_dumbbell.vl.json",
        name: "Chart 08 (Dumbbell)"
    },
    {
        id: "#vis-s3-c9",
        spec: "map_json/s3_c9_spending_streamgraph.vl.json",
        name: "Chart 09 (Streamgraph)"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    charts.forEach(({ id, spec, name }) => {
        const container = document.querySelector(id);
        if (!container) {
            console.warn(`Container ${id} not found in DOM.`);
            return;
        }

        vegaEmbed(id, spec, embedOptions)
            .then((result) => {
                console.log(`${name} rendered successfully!`);
            })
            .catch((err) => {
                console.error(`Error loading ${name} (${spec}):`, err);
                container.innerHTML = `
          <div style="color: #C83E3B; background: #FEF2F2; border: 1px solid #FECACA; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 0.85rem;">
            <strong>${name} Load Error:</strong> ${err.message}
          </div>
        `;
            });
    });
});