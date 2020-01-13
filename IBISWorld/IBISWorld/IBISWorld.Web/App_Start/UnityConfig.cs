using IBISWorld.Web.Services;
using IBISWorld.Web.Services.Interfaces;
using System.Web.Mvc;
using Unity;
using Unity.Mvc5;

namespace IBISWorld.Web
{
    public static class UnityConfig
    {
        public static void RegisterComponents()
        {
            var container = new UnityContainer();

            container.RegisterType<IGlossaryService, GlossaryService>();

            DependencyResolver.SetResolver(new UnityDependencyResolver(container));
        }
    }
}