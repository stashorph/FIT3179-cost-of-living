const embedOptions = {
    actions: false,
    renderer: "svg",
    config: {
        background: "transparent",
        font: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
        title: {
            font: "Newsreader, Lora, Georgia, serif",
            fontSize: 16,
            fontWeight: 600,
            color: "#2C2C2C",
            anchor: "start"
        },
        axis: {
            labelFont: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
            labelFontSize: 11,
            labelColor: "#58534C",
            titleFont: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
            titleFontSize: 12,
            titleFontWeight: 500,
            titleColor: "#2C2C2C",
            domainColor: "rgba(44, 44, 44, 0.2)",
            tickColor: "rgba(44, 44, 44, 0.2)",
            gridColor: "rgba(44, 44, 44, 0.06)",
            gridDash: [3, 3]
        },
        legend: {
            labelFont: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
            labelFontSize: 11,
            labelColor: "#58534C",
            titleFont: "Inter, -apple-system, BlinkMacSystemFont, sans-serif",
            titleFontSize: 12,
            titleFontWeight: 600,
            titleColor: "#2C2C2C"
        },
        view: {
            stroke: "transparent"
        }
    }
};

const charts = [
    { id: "#vis-s1-c1", spec: "map_json/s1_c1_macro_trajectory.vl.json", name: "Macro Trajectory" },
    { id: "#vis-s1-c2", spec: "map_json/s1_c2_essentials_vs_luxuries.vl.json", name: "Essentials vs Luxuries" },
    { id: "#vis-s2-m1", spec: "map_json/s2_m1_state_spending_choropleth.vl.json", name: "State Spending Choropleth" },
    { id: "#vis-s2-m2", spec: "map_json/s2_m2_capital_cpi_spikes.vl.json", name: "Capital City Inflation" },
    { id: "#vis-s2-m3", spec: "map_json/s2_m3_migration_flow.vl.json", name: "Interstate Migration" },
    { id: "#vis-s3-c6", spec: "map_json/s3_c6_category_bump_ranks.vl.json", name: "Category Bump Ranks" },
    { id: "#vis-s3-c7", spec: "map_json/s3_c7_inflation_heatmap.vl.json", name: "Inflation Heatmap" },
    { id: "#vis-s3-c8", spec: "map_json/s3_c8_category_dumbbell.vl.json", name: "Category Dumbbell" },
    { id: "#vis-s3-c9", spec: "map_json/s3_c9_spending_streamgraph.vl.json", name: "Spending Streamgraph" },
    { id: "#vis-s4-c10", spec: "map_json/s4_c10_slci_demographics.vl.json", name: "Spending Growth by Type" },
    { id: "#vis-s4-c11", spec: "map_json/s4_c11_category_volatility.vl.json", name: "Category Volatility" }
];

document.addEventListener("DOMContentLoaded", () => {
    charts.forEach(({ id, spec, name }) => {
        const container = document.querySelector(id);
        if (!container) return;

        vegaEmbed(id, spec, embedOptions)
            .then(() => {
                console.log(`[Editorial Data] ${name} rendered successfully.`);
            })
            .catch((err) => {
                console.warn(`Chart spec error for ${name} (${spec}):`, err);
                container.innerHTML = `
                    <div style="background: rgba(44, 44, 44, 0.03); border: 1px dashed rgba(44, 44, 44, 0.2); border-radius: 4px; padding: 36px 20px; text-align: center; color: #58534C;">
                        <div style="font-family: var(--font-serif, serif); font-size: 1.1rem; font-weight: 600; color: #2C2C2C;">${name}</div>
                        <div style="font-size: 0.82rem; color: #7A746C; margin-top: 6px;">Data visualization preview loading or undergoing update (${spec}).</div>
                    </div>
                `;
            });
    });
});