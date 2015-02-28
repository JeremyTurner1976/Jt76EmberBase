using System.Diagnostics;
using System.Web.Http;
using System.Web.Mvc;
using Autofac;
using Autofac.Integration.Mvc;
using Autofac.Integration.WebApi;
using Jt76EmberBase.Common.Services;
using Jt76EmberBase.Data.Database;
using Jt76EmberBase.Data.Database.ModelRepositories;
using Jt76EmberBase.Ui.Controllers;
using Jt76EmberBase.Ui.Controllers.Api;

namespace Jt76EmberBase.Ui
{
    public class AutofacConfig
    {
        public static IContainer Container { get; set; }


        public static void RegisterAutofac()
        {
            Debug.WriteLine("AutofacConfig.RegisterAutofac()");

            var builder = new ContainerBuilder();

            //Implement the specific injectors for Data and the view models
            builder.RegisterType<Jt76DbContext>().AsSelf().As<IDbContext>().PropertiesAutowired();
            builder.RegisterType<ErrorRepository>().AsSelf().As<IErrorRepository>().PropertiesAutowired();
            builder.RegisterType<LogMessageRepository>().AsSelf().As<ILogMessageRepository>().PropertiesAutowired();
            builder.RegisterType<UiViewModel>().AsSelf().PropertiesAutowired();

            //setup services that will be needed for classes in common
            builder.RegisterType<ConfigService>().AsSelf().As<IConfigService>().PropertiesAutowired();
            builder.RegisterType<ConfigEmailService>().AsSelf().As<IEmailService>().PropertiesAutowired();
            builder.RegisterType<FileService>().AsSelf().As<IFileService>().PropertiesAutowired();

            //setup services that will be used locally from common
            builder.RegisterType<EmailLoggingService>().AsSelf().PropertiesAutowired();
            builder.RegisterType<DbLoggingService>().AsSelf().PropertiesAutowired();
            builder.RegisterType<FileLoggingService>().AsSelf().PropertiesAutowired();

            builder.RegisterType<UiService>().AsSelf().As<IUiService>().PropertiesAutowired();

            // Register your MVC controllers
            builder.RegisterControllers(typeof(ErrorsController).Assembly);
            builder.RegisterControllers(typeof(HomeController).Assembly);

            // Register your Web API controllers
            builder.RegisterApiControllers(typeof(ErrorsApiController).Assembly);
            builder.RegisterApiControllers(typeof(LogMessagesApiController).Assembly);

            // OPTIONAL: Register the Autofac filter provider.
            builder.RegisterWebApiFilterProvider(GlobalConfiguration.Configuration);

            // Set the dependency resolver to be Autofac.
            var container = builder.Build();
            Container = container;

            DependencyResolver.SetResolver(new AutofacDependencyResolver(container));
            // Web API
            var resolver = new AutofacWebApiDependencyResolver(container);
            GlobalConfiguration.Configuration.DependencyResolver = resolver;
        }
    }
}