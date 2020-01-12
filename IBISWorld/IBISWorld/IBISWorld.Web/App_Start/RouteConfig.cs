using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace IBISWorld.Web
{
    public class RouteConfig
    {
        public static void RegisterRoutes(RouteCollection routes)
        {
            routes.IgnoreRoute("{resource}.axd/{*pathInfo}");

            routes.MapMvcAttributeRoutes();

            var routeNames = new List<string>()
            {
                "Home",
            };

            foreach (string name in routeNames)
            {
                routes.MapRoute(
                  name: name,
                  url: $"api/{name}/{{action}}/{{id}}",
                  defaults: new { controller = name, action = "Index", id = UrlParameter.Optional }
                );
            }

            routes.MapRoute(
                name: "Default",
                url: "{*url}",
                defaults: new { controller = "Home", action = "Index" }
            );

        }
    }
}
