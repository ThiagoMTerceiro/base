import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"), 
    route("math", "./routes/math.tsx"),
    route("math/ml-literature", "./routes/ml-literature.tsx"),
    route("biomed", "./routes/biomed.tsx"),
    route("mit-edx", "./routes/mit-edx.tsx"),
    route("ml-projects", "./routes/ml-projects.tsx"),   
] satisfies RouteConfig;
